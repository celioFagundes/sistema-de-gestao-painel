import Image from 'next/image'
import Seo from '../../components/Seo'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import Layout from '../../components/Layout'
import Select from '../../components/Select'
import { BackButton } from '../../components/Navigation/'
import { User } from '../../components/Icons'
import { Input, PhoneInput } from '../../components/Inputs'

import { PageTitle, SectionTitle } from '../../styles/texts'
import {
  PageTitleWrapper,
  Content,
  SectionOrganizationalData,
  SelectsContainerWrapper,
  SelectsRow,
  UserImage,
  InputsWrapper,
  PhoneInputsWrapper,
  PhonesSection,
} from '../../styles/agents/create'
import useSWR from 'swr'
import { fetcher } from '../../lib/fetcher'
import { useEffect } from 'react'
import axios from 'axios'
import { parse } from 'date-fns'
import { MaskedInput } from '../../components/Inputs/Masked'
import { IdentificationInterface, PhoneInterface } from '../../types/agent'
import { Department } from '../../types/department'
import { Role } from '../../types/role'
import { Button } from '../../components/Buttons'
import Router, { useRouter } from 'next/router'

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
    .required('Por favor, informe o nome do colaborador'),
  email: Yup.string()
    .email('Por favor, informe um email válido')
    .required('Por favor, informe um email '),
  department: Yup.string().required('Por favor, selecione um departamento'),
  role: Yup.string().required('Por favor, selecione um cargo'),
  branch: Yup.string().required('Por favor, selecione uma unidade'),
  status: Yup.string().required('Por favor, selecione o status'),
  birth_date: Yup.date()
    .transform((value, originalValue) => parse(originalValue, 'dd/mm/yyyy', new Date()))
    .typeError('Por favor, informe uma data de nascimento válida')
    .required('Por favor, informe a data de nascimento'),
  phones: Yup.array().of(
    Yup.object().shape({
      ddi: Yup.string()
        .transform((value, originalValue) => originalValue.replace('+', '').replace('x', ''))
        .min(2, 'Digite um DDI válido')
        .required('Digite o DDI.'),
      ddd: Yup.string()
        .transform((value, originalValue) =>
          originalValue.replace('(', '').replace(')', '').replace('x', '')
        )
        .min(2, 'Digite um DDD válido')
        .required('Digite o DDD.'),
      number: Yup.string()
        .transform((value, originalValue) =>
          originalValue.replace('-', '').replace(' ', '').replace('x', '')
        )
        .min(9, 'Digite um número válido')
        .required('Digite o número'),
    })
  ),
  identification: Yup.array().of(
    Yup.object().shape({
      type: Yup.string().required('Por favor, informe um slug'),
      number: Yup.string().when('type', type => {
        if (type === 'CPF') {
          return Yup.string()
            .transform(value =>
              value
                .split('')
                .filter((char: string) => char !== '-' && char !== '.' && char !== 'x')
                .join('')
            )
            .min(11, 'Digite um CPF válido')
            .required('Por favor, informe um CPF')
        }
        if (type === 'RG') {
          return Yup.string()
            .transform(value => value.replace('x', ''))
            .min(10, 'Digite um RG válido')
            .required('Por favor, informe um RG')
        }
        if (type === 'CNH') {
          return Yup.string()
            .transform(value => value.replace('x', ''))
            .min(11, 'Digite uma CNH válida')
            .required('Por favor, informe uma CNH')
        }
        return Yup.string()
      }),
    })
  ),
})
const CreateAgent: React.FC = () => {
  const router = useRouter()
  const { data: departments } = useSWR<DepartmentsData>(
    'http://localhost:3000/departments/',
    fetcher
  )
  const form = useFormik({
    validateOnChange: false,
    validateOnMount: false,
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
      const dateParts = values.birth_date.split('/')
      const validDate = `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`
      const newValues = { ...values, birth_date: validDate }
      const createData = await axios.post('http://localhost:3000/agents/', newValues)
      if (createData.status) {
        router.push('/agents')
      }
    },
  })
  const { data: roles } = useSWR<RolesData>(
    `http://localhost:3000/roles/?slug=${form.values.department}`,
    fetcher
  )

  useEffect(() => {
    const resetBranchAndRoleValue = () => {
      form.setFieldValue('branch', '')
      form.setFieldValue('role', '')
    }
    resetBranchAndRoleValue()
  }, [form.values.department])

  const handleIdentificationErrorMessage = (index: number) => {
    if (!form.errors.identification?.[index]) {
      return ''
    }
    return (form.errors.identification[index] as IdentificationInterface).number
  }
  const handlePhoneInputErrorMessage = (index: number) => {
    let errorMessage = ''
    if (!form.errors.phones?.[index]) {
      return ''
    }
    const convertToPhone = form.errors.phones[index] as PhoneInterface
    if (convertToPhone.ddi) {
      errorMessage += convertToPhone.ddi + ' '
    }
    if (convertToPhone.ddd) {
      errorMessage += convertToPhone.ddd + ' '
    }
    if (convertToPhone.number) {
      errorMessage += convertToPhone.number
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
            <UserImage>
              <User />
            </UserImage>
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
              <MaskedInput
                mask='Data'
                id='nascimento-input'
                name='birth_date'
                label='Data de nascimento'
                value={form.values.birth_date}
                placeholder='Insire a data de nascimento do colaborador'
                errorMessage={form.errors.birth_date}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputsWrapper>
            <SectionTitle>Documentos</SectionTitle>

            <InputsWrapper>
              <MaskedInput
                mask='CPF'
                id='cpf-input'
                name={`identification.${[0]}.number`}
                label='CPF'
                onChange={form.handleChange}
                value={form.values.identification[0].number}
                placeholder='Insire o CPF do colaborador'
                errorMessage={handleIdentificationErrorMessage(0)}
                onBlur={form.handleBlur}
              />
              <MaskedInput
                mask='RG'
                id='rg-input'
                name={`identification.${[1]}.number`}
                label='RG'
                placeholder='Insire o RG do colaborador'
                onChange={form.handleChange}
                value={form.values.identification[1].number}
                errorMessage={handleIdentificationErrorMessage(1)}
                onBlur={form.handleBlur}
              />
              <MaskedInput
                mask='CNH'
                id='cnh-input'
                name={`identification.${[2]}.number`}
                label='Carteira de motorista'
                onChange={form.handleChange}
                value={form.values.identification[2].number}
                placeholder='Insire o n° de registro da CNH do colaborador'
                errorMessage={handleIdentificationErrorMessage(2)}
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
              {JSON.stringify(form.values, null, 2)}
              <SelectsContainerWrapper>
                <SelectsRow>
                  <Select
                    name='department'
                    label='Departamento'
                    bgColor='#F5FAF8'
                    onChange={form.handleChange}
                    errorMessage={form.errors.department}
                    onBlur={form.handleBlur}
                  >
                    {departments &&
                      departments.results.map(dept => (
                        <Select.Option value={dept.name} key={dept._id}>
                          {dept.name}
                        </Select.Option>
                      ))}
                  </Select>
                  <Select
                    name='role'
                    label='Cargo'
                    bgColor='#F5FAF8'
                    onChange={form.handleChange}
                    errorMessage={form.errors.role}
                    onBlur={form.handleBlur}
                  >
                    {form.values.department !== '' &&
                      roles &&
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
                    errorMessage={form.errors.branch}
                    onBlur={form.handleBlur}
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
                    errorMessage={form.errors.status}
                    onBlur={form.handleBlur}
                  >
                    <Select.Option value='active'>Ativo</Select.Option>
                    <Select.Option value='inactive'>Inativo</Select.Option>
                  </Select>
                </SelectsRow>
              </SelectsContainerWrapper>
            </SectionOrganizationalData>
            <Button type='submit'>Criar</Button>
          </form>
        </Content>
      </Layout>
    </>
  )
}

export default CreateAgent
