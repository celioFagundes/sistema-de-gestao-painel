import Seo from '../../components/Seo'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import Layout from '../../components/Layout'
import { BackButton } from '../../components/Navigation/'
import { CheckboxInput, Input } from '../../components/Inputs'

import { PageTitle, SectionTitle } from '../../styles/texts'
import { PageTitleWrapper, Content } from '../../styles/agents/create'

import axios from 'axios'

import { Button } from '../../components/Buttons'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { fetcher } from '../../lib/fetcher'
import { Department } from '../../types/department'
import Select from '../../components/Select'
import { Row } from '../../styles/roles/create'
import { Table } from '../../components/Tables'
import { Permissions, Role } from '../../types/role'

const areas = ['Dados gerais', 'Finanças', 'Pedidos', 'Promoções']
interface DepartmentsData {
  results: [Department]
  success: boolean
}


const initialValues: Role = {
  name: '',
  department: '',
  permissions: [
    {
      area: 'Dados gerais',
      enabled: [],
    },
    {
      area: 'Finanças',
      enabled: [],
    },
    {
      area: 'Pedidos',
      enabled: [],
    },
    {
      area: 'Promoções',
      enabled: [],
    },
  ],
}
const RoleSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Por favor, informe um nome com pelo menos 3 caracteres')
    .required('Por favor, informe o nome do cargo'),
  department: Yup.string()
    .min(1, 'Por favor, selecione o departamento')
    .required('Por favor, selecione o departamento'),
  permissions: Yup.array().of(
    Yup.object().shape({
      area: Yup.string().required('Por favor, informe a áre de permissão'),
      enabled: Yup.array().of(Yup.string().oneOf(['read','write','delete'])),
    })
  ),
})
const CreateRole: React.FC = () => {
  const { data: departments } = useSWR<DepartmentsData>(
    'http://localhost:3000/departments/',
    fetcher
  )
  const router = useRouter()
  const form = useFormik({
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: true,
    initialValues : initialValues,
    validationSchema: RoleSchema,
    onSubmit: async values => {
      const createData = await axios.post('http://localhost:3000/roles/', values)
      if (createData.status) {
        router.push('/roles')
      }
    },
  })

  const handleCheckbox = (index:number, action: Permissions) =>{
    const actionsList = [...form.values.permissions[index].enabled]
    if(actionsList.includes(action)){
      const removeAction = actionsList.filter(act => act !== action)
      return form.setFieldValue(`permissions.${index}.enabled`, removeAction)
    }
    actionsList.push(action)
    form.setFieldValue(`permissions.${index}.enabled`, actionsList)
  }
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
            <Row>
              <Input
                id='name-input'
                name='name'
                label='Nome do cargo'
                onChange={form.handleChange}
                value={form.values.name}
                placeholder='Insire o nome do cargo'
                errorMessage={form.errors.name}
                onBlur={form.handleBlur}
              />

              <Select
                name='department'
                label='Departamento do cargo'
                bgColor='#fff'
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
            </Row>
            <SectionTitle>Permissões do cargo</SectionTitle>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.Th>Área</Table.Th>
                  <Table.Th>Ler</Table.Th>
                  <Table.Th>Escrever</Table.Th>
                  <Table.Th>Remover</Table.Th>
                </Table.Row>
              </Table.Header>
              <Table.Body>
              {areas.map((item,index) =>(
                <Table.Row>
                  <Table.Td>{item}</Table.Td>
                  <Table.Td>
                    <CheckboxInput
                      id={`${item}-input-read`}
                      name = {`read`}
                      onClick={() => handleCheckbox(index, Permissions.Read)}
                      checked={form.values.permissions[index].enabled.includes(Permissions.Read)}
                    />
                  </Table.Td>
                  <Table.Td>
                  <CheckboxInput
                      id={`${item}-input-write`}
                      name = {`write`}
                      onClick={() => handleCheckbox(index, Permissions.Write)}
                      checked={form.values.permissions[index].enabled.includes(Permissions.Write)}
                    />
                  </Table.Td>
                  <Table.Td>
                  <CheckboxInput
                      id={`${item}-input-delete`}
                      name = {`delete`}
                      onClick={() => handleCheckbox(index, Permissions.Delete)}
                      checked={form.values.permissions[index].enabled.includes(Permissions.Delete)}
                    />
                  </Table.Td>
                </Table.Row>
                 ))}
              </Table.Body>
            </Table>
            <Button type='submit'>Criar</Button>
          </form>
        </Content>
      </Layout>
    </>
  )
}

export default CreateRole
