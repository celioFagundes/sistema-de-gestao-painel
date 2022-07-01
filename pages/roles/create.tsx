import Seo from '../../components/Seo'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import Layout from '../../components/Layout'
import { BackButton } from '../../components/Navigation/'
import { CheckboxInput } from '../../components/Inputs'

import { PageTitle, SectionTitle } from '../../styles/texts'
import { PageTitleWrapper, Content } from '../../styles/agents/create'

import axios from 'axios'

import { IdentificationInterface } from '../../types/agent'
import { Button } from '../../components/Buttons'
import { useRouter } from 'next/router'

const AgentSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Por favor, informe um nome com pelo menos 3 caracteres')
    .required('Por favor, informe o nome do cargo'),
  permissions: Yup.array().of(Yup.string()),
})
const CreateRole: React.FC = () => {
  const router = useRouter()
  const form = useFormik({
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: true,
    initialValues: {
      name: '',
      permissions: [],
    },
    validationSchema: AgentSchema,
    onSubmit: async values => {
      const createData = await axios.post('http://localhost:3000/roles/', values)
      if (createData.status) {
        router.push('/roles')
      }
    },
  })

  return (
    <>
      <Seo title='Criar novo cargo' description='Criar novo cargo' />
      <Layout>
        <PageTitleWrapper>
          <BackButton url='/roles' />
          <PageTitle>Criar novo cargo</PageTitle>
        </PageTitleWrapper>
        <Content>
          <form onSubmit={form.handleSubmit}>
            <CheckboxInput
              id='name-input'
              name='name'
              label='Nome do cargo'
              onChange={form.handleChange}
              value={form.values.name}
              placeholder='Insire o nome do cargo'
              errorMessage={form.errors.name}
              onBlur={form.handleBlur}
            />
            <SectionTitle>Permissões do cargo</SectionTitle>

            <Button type='submit'>Criar</Button>
          </form>
        </Content>
      </Layout>
    </>
  )
}

export default CreateRole
