
import Seo from '../../../components/Seo'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import Layout from '../../../components/Layout'
import { BackButton } from '../../../components/Navigation/'
import { CheckboxInput, } from '../../../components/Inputs'

import { PageTitle, SectionTitle } from '../../../styles/texts'
import {
  PageTitleWrapper,
  Content,
  InputsWrapper,

} from '../../../styles/agents/create'
import useSWR from 'swr'
import { fetcher } from '../../../lib/fetcher'
import axios from 'axios'
import { Department } from '../../../types/department'
import { Button } from '../../../components/Buttons'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface DepartmentsData {
  department: Department
  success: boolean
}

const DepartmentSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Por favor, informe um nome com pelo menos 3 caracteres')
    .required('Por favor, informe o nome do departmento'),
})
const EditDepartment: React.FC = () => {
  const router = useRouter()
  const { data: departmentData, error } = useSWR<DepartmentsData>(
    router.query.id ? `http://localhost:3000/departments/${router.query.id}` : null,
    fetcher
  )
  const form = useFormik({
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: true,
    initialValues: {
      name: '',
    },
    validationSchema: DepartmentSchema,
    onSubmit: async values => {
      const createData = await axios.post('http://localhost:3000/departments/', values)
      if (createData.status) {
        router.push('/departments')
      }
    },
  })

  useEffect(() => {
    const fillFormFields = () => {
      if (!departmentData || departmentData.department) {
        return null
      }
      form.setFieldValue('name', departmentData.department.name)
    }
    fillFormFields()
  }, [departmentData])
  return (
    <>
      <Seo title='Criar novo departamento' description='Criar novo departamento' />
      <Layout>
        <PageTitleWrapper>
          <BackButton url='/departament' />
          <PageTitle>Criar novo departamento</PageTitle>
        </PageTitleWrapper>
        <Content>
          <form onSubmit={form.handleSubmit}>
            <SectionTitle>Informações do departamento</SectionTitle>
            <InputsWrapper>
              <CheckboxInput
                id='name-input'
                name='name'
                label='Nome'
                onChange={form.handleChange}
                value={form.values.name}
                placeholder='Insire o nome do departamento'
                errorMessage={form.errors.name}
                onBlur={form.handleBlur}
              />
            </InputsWrapper>
            <Button type='submit'>Criar</Button>
          </form>
        </Content>
      </Layout>
    </>
  )
}

export default EditDepartment
