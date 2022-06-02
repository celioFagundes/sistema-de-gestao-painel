import Seo from '../../../components/Seo'

import Layout from '../../../components/Layout'
import Table from '../../../components/Table'
import BackButton from '../../../components/BackButton'
import Select from '../../../components/Select'

import { SelectsRow, Content, PageTitleWrapper } from '../../../styles/roles/create'
import { PageTitle, SectionTitle } from '../../../styles/texts'
import CheckboxOn from '../../../components/Icons/CheckboxOn'
import CheckboxOff from '../../../components/Icons/CheckboxOff'
import useSWR from 'swr'
import { fetcher } from '../../../lib/fetcher'

interface GroupRules {
  role: string
  permissions: [string]
}
interface Role {
  name: string
  department: string
  grouprules: [GroupRules]
}

interface DataProps {
  role: Role
}
const Role: React.FC = () => {
  const { data, error } = useSWR<DataProps>('https://pp-api-desafio.herokuapp.com/role/1', fetcher)
  return (
    <>
      <Seo title='Criar novo cargo' description='Criação de um novo cargo' />
      <Layout>
        <PageTitleWrapper>
          <BackButton url='/roles' />
          <PageTitle>Cargos e Permissôes</PageTitle>
        </PageTitleWrapper>
        <Content>
          <SectionTitle>Dados do cargo</SectionTitle>
          <SelectsRow>
            <Select label='Departamento'>
              <Select.Option>{data?.role.department}</Select.Option>
            </Select>
            <Select label='Cargo'>
              <Select.Option>{data?.role.name}</Select.Option>
            </Select>
          </SelectsRow>
          <SectionTitle>Listagem de permissões</SectionTitle>
          {data && (
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.Th>Cargo</Table.Th>
                  <Table.Th>Ler</Table.Th>
                  <Table.Th>Editar</Table.Th>
                  <Table.Th>Excluir</Table.Th>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data.role.grouprules.map(rule => (
                  <Table.Row key={rule.role}>
                    <Table.Td>{rule.role} </Table.Td>
                    <Table.Td>
                      {rule.permissions.includes('read') ? <CheckboxOn /> : <CheckboxOff />}
                    </Table.Td>
                    <Table.Td>
                      {rule.permissions.includes('write') ? <CheckboxOn /> : <CheckboxOff />}
                    </Table.Td>
                    <Table.Td>
                      {rule.permissions.includes('delete') ? <CheckboxOn /> : <CheckboxOff />}
                    </Table.Td>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          )}
        </Content>
      </Layout>
    </>
  )
}

export default Role
