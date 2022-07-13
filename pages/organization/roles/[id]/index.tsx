import Seo from '../../../../components/Seo'

import Layout from '../../../../components/Layout'
import { Table } from '../../../../components/Tables'
import { BackButton } from '../../../../components/Navigation/'

import { CardsRow, Content, PageTitleWrapper } from '../../../../styles/roles/details'
import { PageTitle, SectionTitle } from '../../../../styles/texts'
import { CheckboxOn, CheckboxOff } from '../../../../components/Icons/'
import useSWR from 'swr'
import { fetcher } from '../../../../lib/fetcher'
import { useRouter } from 'next/router'
import { CardWithLabel } from '../../../../components/Cards'

interface Permission {
  area: string
  enabled: [string]
}
interface Role {
  name: string
  department: string
  permissions: Permission[]
}

interface DataProps {
  role: Role
}
const Role: React.FC = () => {
  const router = useRouter()
  const { data, error } = useSWR<DataProps>(
    router.query.id ? `http://localhost:3000/roles/${router.query.id}` : null,
    fetcher
  )
  return (
    <>
      <Seo title='Criar novo cargo' description='Criação de um novo cargo' />
      <Layout>
        <PageTitleWrapper>
          <BackButton url='/organization/roles' />
          <PageTitle>Cargos e Permissôes</PageTitle>
        </PageTitleWrapper>
        <Content>
          {data && (
            <>
              <SectionTitle>Dados do cargo</SectionTitle>
              <CardsRow>
                <CardWithLabel dataTitle={'Cargo'} data={data.role.name} />
                <CardWithLabel dataTitle={'Departamento'} data={data.role.department} />
              </CardsRow>
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
                    {data.role.permissions.map(rule => (
                      <Table.Row key={rule.area}>
                        <Table.Td>{rule.area} </Table.Td>
                        <Table.Td>
                          {rule.enabled.includes('read') ? <CheckboxOn /> : <CheckboxOff />}
                        </Table.Td>
                        <Table.Td>
                          {rule.enabled.includes('write') ? <CheckboxOn /> : <CheckboxOff />}
                        </Table.Td>
                        <Table.Td>
                          {rule.enabled.includes('delete') ? <CheckboxOn /> : <CheckboxOff />}
                        </Table.Td>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              )}
            </>
          )}
        </Content>
      </Layout>
    </>
  )
}

export default Role
