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

interface Phone {
  ddd: number
  ddi: number
  number: number
}
interface Identification {
  type: string
  number: number
}
interface CreateAgent {
  _id: number
  name: string
  image: string
  department: string
  branch: string
  role: string
  status: boolean
  email: string
  phones: [Phone]
  identification: [Identification]
  birth_date: Date
}

const AgentSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Por favor, informe um nome com pelo menos 3 caracteres')
    .required('Por favor, informe um nome'),
  email: Yup.string()
    .min(3, 'Por favor, informe um slug com pelo menos 3 caracteres')
    .required('Por favor, informe um slug'),
  birth_date: Yup.date()
    .min(3, 'Por favor, informe um slug com pelo menos 3 caracteres')
    .required('Por favor, informe um slug'),
  phones: Yup.array().of(
    Yup.object().shape({
      ddi: Yup.string(),
      ddd: Yup.string(),
      number: Yup.string(),
    })
  ),
  identification: Yup.array().of(
    Yup.object().shape({
      type: Yup.string(),
      number: Yup.string(),
    })
  ),
})
const CreateAgent: React.FC = () => {
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
      /*
      const data = await createProduct(newValues)
      if (data && !data.errors) {
        router.push('/products')
      }*/
    },
  })
  return (
    <>
      <Seo title='Criar novo colaborador' description='Criar novo colaborador' />
      <Layout>
        <PageTitleWrapper>
          <BackButton url='/agents' />
          <PageTitle>Criar novo colaborador</PageTitle>
        </PageTitleWrapper>
        <Content>
          <UserContainer>
            <UserImage>
              <User />
            </UserImage>

            <UserData>
              <Username></Username>
              <Email></Email>
            </UserData>
          </UserContainer>
          {JSON.stringify(form.values, null, 2)}
          <SectionTitle>Informações pessoais</SectionTitle>

          <InputsWrapper>
            <Input
              id='name-input'
              name='name'
              label='Nome Completo'
              onChange={form.handleChange}
              value={form.values.name}
              placeholder='Insire o nome do colaborador'
            />
            <Input
              id='email-input'
              name='email'
              label='Email'
              onChange={form.handleChange}
              value={form.values.email}
              placeholder='Insire o email do colaborador'
            />
            <Input
              id='nascimento-input'
              name='birth_date'
              label='Data de nascimento'
              onChange={form.handleChange}
              value={form.values.birth_date}
              placeholder='Insire a data de nascimento do colaborador'
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
            />
            <Input
              id='rg-input'
              name={`identification.${[1]}.number`}
              label='RG'
              placeholder='Insire o RG do colaborador'
              onChange={form.handleChange}
              value={form.values.identification[1].number}
            />
            <Input
              id='cnh-input'
              name={`identification.${[2]}.number`}
              label='Carteira de motorista'
              onChange={form.handleChange}
              value={form.values.identification[2].number}
              placeholder='Insire o n° da CNH do colaborador'
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
              />
              <PhoneInput
                ddiName={`phones.${[1]}.ddi`}
                dddName={`phones.${[1]}.ddd`}
                numberName={`phones.${[1]}.number`}
                ddiValue={form.values.phones[1].ddi}
                dddValue={form.values.phones[1].ddd}
                numberValue={form.values.phones[1].number}
                onChange={form.handleChange}
              />
            </PhoneInputsWrapper>
          </PhonesSection>

          <SectionOrganizationalData>
            <SectionTitle>Dados Organizacionais</SectionTitle>
            <SelectsContainerWrapper>
              <SelectsRow>
                <Select label='Departamento' bgColor='#F5FAF8'>
                  <Select.Option>Comercial</Select.Option>
                </Select>
                <Select label='Cargo' bgColor='#F5FAF8'>
                  <Select.Option>Gerente</Select.Option>
                </Select>
              </SelectsRow>
              <SelectsRow>
                <Select label='Unidade' bgColor='#F5FAF8'>
                  <Select.Option>Unidade 1</Select.Option>
                </Select>
                <Select label='Status' bgColor='#F5FAF8'>
                  <Select.Option>Ativo</Select.Option>
                  <Select.Option>Inativo</Select.Option>
                </Select>
              </SelectsRow>
            </SelectsContainerWrapper>
          </SectionOrganizationalData>
        </Content>
      </Layout>
    </>
  )
}

export default CreateAgent
