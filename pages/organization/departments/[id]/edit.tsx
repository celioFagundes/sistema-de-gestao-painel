import Image from 'next/image'
import Seo from '../../../../components/Seo'
import * as Yup from 'yup'
import { FieldArray, FormikProvider, useFormik } from 'formik'

import Layout from '../../../../components/Layout'
import { BackButton } from '../../../../components/Navigation/'
import { Input } from '../../../../components/Inputs'

import { PageTitle, SectionTitle } from '../../../../styles/texts'
import { PageTitleWrapper, Content, InputsWrapper } from '../../../../styles/agents/create'

import axios from 'axios'
import { Button } from '../../../../components/Buttons'
import { useRouter } from 'next/router'
import { BranchWrapper, SectionBranches } from '../../../../styles/departments/create'
import { InputWithDelete } from '../../../../components/Inputs/InputWithDelete'
import useSWR from 'swr'
import { fetcher } from '../../../../lib/fetcher'
import { useEffect } from 'react'
import { Department } from '../../../../types/department'

const DepartmentSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Por favor, informe um nome com pelo menos 3 caracteres')
    .required('Por favor, informe o nome do departmento'),
  branches: Yup.array().of(
    Yup.string()
      .min(5, 'Informe uma unidade com no minimo 5 caracteres')
      .required('Por favor informe o nome da unidade')
  ),
})

interface DepartmentData {
  department: Department
  success: boolean
}
const EditDepartment: React.FC = () => {
  const router = useRouter()
  const { data: departmentData, error } = useSWR<DepartmentData>(
    router.query.id ? `http://localhost:3000/departments/${router.query.id}` : null,
    fetcher
  )
  const form = useFormik({
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: true,
    initialValues: {
      name: '',
      branches: [''],
    },
    validationSchema: DepartmentSchema,
    onSubmit: async values => {
      const updateData = await axios.put(`http://localhost:3000/departments/${router.query.id}`, values)
      if (updateData.status) {
        router.push('/organization/departments')
      }
    },
  })

  useEffect(() => {
    const fillFormFields = () => {
      if (!departmentData|| !departmentData?.department) {
        return null
      }
      form.setFieldValue('name', departmentData.department.name)
      form.setFieldValue('branches', departmentData.department.branches)
    }
    fillFormFields()
  }, [departmentData])
  return (
    <>
      <Seo title='Editar departamento' description='Editar departamento' />
      <Layout>
        <PageTitleWrapper>
          <BackButton url='/organization/departments' />
          <PageTitle>Editar departamento</PageTitle>
        </PageTitleWrapper>
        <Content>
          <form onSubmit={form.handleSubmit}>
            <SectionTitle>Informações do departamento</SectionTitle>
            <InputsWrapper>
              <Input
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
            <FormikProvider value={form}>
              <FieldArray
                name='branches'
                render={arrayHelpers => {
                  return (
                    <SectionBranches>
                      <SectionTitle>Unidades</SectionTitle>
                      <Button type='button' onClick={() => arrayHelpers.push('')}>
                        Adicionar nova unidade
                      </Button>
                      {form.values.branches.map((branch, index) => (
                        <BranchWrapper key={index}>
                          <InputWithDelete
                            id='branch-input'
                            name={`branches.${index}`}
                            label='Unidade'
                            placeholder='Digite o nome da unidade'
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            onClick = {() => arrayHelpers.remove(index)}
                            value={form.values.branches[index]}
                            errorMessage={form.errors?.branches && form.errors.branches[index]}
                          />        
                        </BranchWrapper>
                      ))}
                    </SectionBranches>
                  )
                }}
              />
            </FormikProvider>
            <Button type='submit'>Confirmar alterações</Button>
          </form>
        </Content>
      </Layout>
    </>
  )
}

export default EditDepartment
