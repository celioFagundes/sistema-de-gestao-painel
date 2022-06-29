import Image from 'next/image'
import Seo from '../../components/Seo'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import Layout from '../../components/Layout'
import Select from '../../components/Select'
import { BackButton } from '../../components/Navigation/'
import { User, Phone } from '../../components/Icons'
import { Input, PhoneInput } from '../../components/Inputs'

import {
  PageTitleWrapper,
  Content,
  UserContainer,
  UserData,
  Username,
  Email,
  SectionOrganizationalData,
  SelectsContainerWrapper,
  SelectsRow,
  UserImage,
} from '../../styles/agents/details'
import { PageTitle, SectionTitle } from '../../styles/texts'
import { InputsWrapper, PhoneInputsWrapper, PhonesSection } from '../../styles/agents/create'
import useSWR from 'swr'
import { fetcher } from '../../lib/fetcher'
import { useEffect } from 'react'
import axios from 'axios'
import { parse } from 'date-fns'

interface Phone {
  ddi: string
  ddd: string
  number: string
}
interface Identification {
  type: string
  number: string
}

interface Department {
  _id: string
  name: string
  branches: string[]
}
interface Role {
  _id: string
  name: string
  permissions: string[]
}
interface CreateAgent {
  _id: number
  name: string
  image: string
  department: string
  branch: string
  role: string
  status: string
  email: string
  phones: [Phone]
  identification: [Identification]
  birth_date: Date
}
interface DepartmentsData {
  results: [Department]
  success: boolean
}
interface RolesData {
  results: [Role]
  success: boolean
}
const AgentSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Por favor, informe um nome com pelo menos 3 caracteres')
    .required('Por favor, informe um nome'),
  email: Yup.string()
    .min(3, 'Por favor, informe um slug com pelo menos 3 caracteres')
    .required('Por favor, informe um slug'),
  department: Yup.string()
    .min(3, 'Por favor, informe um slug com pelo menos 3 caracteres')
    .required('Por favor, informe um slug'),
  role: Yup.string()
    .min(3, 'Por favor, informe um slug com pelo menos 3 caracteres')
    .required('Por favor, informe um slug'),
  branch: Yup.string()
    .min(3, 'Por favor, informe um slug com pelo menos 3 caracteres')
    .required('Por favor, informe um slug'),
  status: Yup.string().required('Por favor, informe um slug'),
  birth_date: Yup.date()
    .transform((value, originalValue) => parse(originalValue, 'dd/MM/yyyy', new Date()))
    .required('Por favor, informe um slug'),
  phones: Yup.array().of(
    Yup.object().shape({
      ddi: Yup.string().required('Digite o DDI.'),
      ddd: Yup.string().required('Digite o DDD.'),
      number: Yup.string().required('Digite o número'),
    })
  ),
  identification: Yup.array().of(
    Yup.object().shape({
      type: Yup.string().required('Por favor, informe um slug'),
      number: Yup.string().required('Por favor, informe um slug'),
    })
  ),
})
const CreateAgent: React.FC = () => {
  const { data: departments } = useSWR<DepartmentsData>(
    'http://localhost:3000/departments/',
    fetcher
  )
  const { data: roles } = useSWR<RolesData>('http://localhost:3000/roles/', fetcher)
  const form = useFormik({
    validateOnChange: false,
    validateOnMount: true,
    validateOnBlur: true,
    initialValues: {
      name: '',
      email: '',
      birth_date: '',
      department: '',
      role: '',
      branch: '',
      status: '',
      phones: [
        { ddi: '', ddd: '', number: '' },
        { ddi: '', ddd: '', number: '' },
      ],
      identification: [
        { type: 'CPF', number: '' },
        { type: 'RG', number: '' },
        { type: 'CNH', number: '' },
      ],
    },
    validationSchema: AgentSchema,
    onSubmit: async values => {
      await axios.post('http://localhost:3000/agents/', values)
    },
  })
  useEffect(() => {
    const resetBranchValue = () => {
      form.setFieldValue('branch', '')
    }
    resetBranchValue()
  }, [form.values.department])

  const handlePhoneInputErrorMessage = (index:number) => {
    let errorMessage = ''
    if(!form.errors.phones?.[index]){
      return ''
    }
    if((form.errors.phones[index] as Phone).ddi){
      errorMessage += (form.errors.phones[index] as Phone).ddi
    }
    if((form.errors.phones[index] as Phone).ddd){
      errorMessage += (form.errors.phones[index] as Phone).ddd
    }
    if((form.errors.phones[index] as Phone).number){
      errorMessage += (form.errors.phones[index] as Phone).number
    }
    return errorMessage
  }
  return (
    <>
      <Seo title='Criar novo colaborador' description='Criar novo colaborador' />
      <Layout>
        <PageTitleWrapper>
          <BackButton url='/agents' />
          <PageTitle>Criar novo colaborador</PageTitle>
        </PageTitleWrapper>
        <Content>
          <form onSubmit={form.handleSubmit}>
            <UserContainer>
              <UserImage>
                <User />
              </UserImage>
              <UserData>
                <Username></Username>
                <Email></Email>
              </UserData>
            </UserContainer>
            <SectionTitle>Informações pessoais</SectionTitle>
            <InputsWrapper>
              <Input
                id='name-input'
                name='name'
                label='Nome Completo'
                onChange={form.handleChange}
                value={form.values.name}
                placeholder='Insire o nome do colaborador'
                errorMessage={form.errors.name}
                onBlur={form.handleBlur}
              />
              <Input
                id='email-input'
                name='email'
                label='Email'
                onChange={form.handleChange}
                value={form.values.email}
                placeholder='Insire o email do colaborador'
                errorMessage={form.errors.email}
                onBlur={form.handleBlur}
              />
              <Input
                id='nascimento-input'
                name='birth_date'
                label='Data de nascimento'
                onChange={form.handleChange}
                value={form.values.birth_date}
                placeholder='Insire a data de nascimento do colaborador'
                errorMessage={form.errors.birth_date}
                onBlur={form.handleBlur}
              />
            </InputsWrapper>
            <SectionTitle>Documentos</SectionTitle>

            <InputsWrapper>
              <Input
                id='cpf-input'
                name={`identification.${[0]}.number`}
                label='CPF'
                onChange={form.handleChange}
                value={form.values.identification[0].number}
                placeholder='Insire o CPF do colaborador'
                errorMessage={
                  form.errors.identification?.[0]
                    ? (form.errors.identification[0] as Identification).number
                    : ''
                }
                onBlur={form.handleBlur}
              />
              <Input
                id='rg-input'
                name={`identification.${[1]}.number`}
                label='RG'
                placeholder='Insire o RG do colaborador'
                onChange={form.handleChange}
                value={form.values.identification[1].number}
                errorMessage={
                  form.errors.identification?.[1]
                    ? (form.errors.identification[1] as Identification).number
                    : ''
                }
                onBlur={form.handleBlur}
              />
              <Input
                id='cnh-input'
                name={`identification.${[2]}.number`}
                label='Carteira de motorista'
                onChange={form.handleChange}
                value={form.values.identification[2].number}
                placeholder='Insire o n° da CNH do colaborador'
                errorMessage={
                  form.errors.identification?.[2]
                    ? (form.errors.identification[2] as Identification).number
                    : ''
                }
                onBlur={form.handleBlur}
              />
            </InputsWrapper>
            <SectionTitle>Telefones</SectionTitle>
            <PhonesSection>
              <PhoneInputsWrapper>
                <PhoneInput
                  ddiName={`phones.${[0]}.ddi`}
                  dddName={`phones.${[0]}.ddd`}
                  numberName={`phones.${[0]}.number`}
                  ddiValue={form.values.phones[0].ddi}
                  dddValue={form.values.phones[0].ddd}
                  numberValue={form.values.phones[0].number}
                  onChange={form.handleChange}
                  errorMessage={handlePhoneInputErrorMessage(0)}
                  onBlur={form.handleBlur}
                />
                <PhoneInput
                  ddiName={`phones.${[1]}.ddi`}
                  dddName={`phones.${[1]}.ddd`}
                  numberName={`phones.${[1]}.number`}
                  ddiValue={form.values.phones[1].ddi}
                  dddValue={form.values.phones[1].ddd}
                  numberValue={form.values.phones[1].number}
                  onChange={form.handleChange}
                  errorMessage={handlePhoneInputErrorMessage(1)}
                  onBlur={form.handleBlur}
                />
              </PhoneInputsWrapper>
            </PhonesSection>

            <SectionOrganizationalData>
              <SectionTitle>Dados Organizacionais</SectionTitle>
              <SelectsContainerWrapper>
                <SelectsRow>
                  <Select
                    name='department'
                    label='Departamento'
                    bgColor='#F5FAF8'
                    onChange={form.handleChange}
                  >
                    {departments &&
                      departments.results.map(dept => (
                        <Select.Option value={dept.name} key={dept._id}>
                          {dept.name}
                        </Select.Option>
                      ))}
                  </Select>
                  <Select name='role' label='Cargo' bgColor='#F5FAF8' onChange={form.handleChange}>
                    {roles &&
                      roles.results.map(role => (
                        <Select.Option value={role.name} key={role._id}>
                          {role.name}
                        </Select.Option>
                      ))}
                  </Select>
                </SelectsRow>
                <SelectsRow>
                  <Select
                    name='branch'
                    label='Unidade'
                    bgColor='#F5FAF8'
                    onChange={form.handleChange}
                  >
                    {departments &&
                      form.values.department !== '' &&
                      departments.results
                        .filter(dept => dept.name === form.values.department)[0]
                        .branches.map(branch => (
                          <Select.Option key={branch} value={branch}>
                            {branch}
                          </Select.Option>
                        ))}
                  </Select>
                  <Select
                    name='status'
                    label='Status'
                    onChange={form.handleChange}
                    bgColor='#F5FAF8'
                  >
                    <Select.Option value='active'>Ativo</Select.Option>
                    <Select.Option value='inactive'>Inativo</Select.Option>
                  </Select>
                </SelectsRow>
              </SelectsContainerWrapper>
            </SectionOrganizationalData>
            <button type='submit'>Criar</button>
          </form>
        </Content>
      </Layout>
    </>
  )
}

export default CreateAgent
