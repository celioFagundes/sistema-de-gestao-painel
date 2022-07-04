import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '../../../lib/fetcher'
import { Down, Up } from '../../../components/Icons'

import Seo from '../../../components/Seo'
import Layout from '../../../components/Layout'
import { Table } from '../../../components/Tables'
import { BackButton, NavigateButton } from '../../../components/Navigation/'

import { SortSelect, SortButton } from '../../../components/Sorting/'
import { Content, DropdownIcon, Value, Label, PageTitleWrapper } from '../../../styles/agents'
import { PageTitle, SectionTitle } from '../../../styles/texts'
import axios from 'axios'
import { Department } from '../../../types/department'
import { useRouter } from 'next/router'
import { CardWithLabel } from '../../../components/Cards'

interface DataProps {
  results: {
    docs: Department[]
    hasNextPage: boolean
    hasPrevPage: boolean
    limit: number
    nextPage: boolean
    page: number
    pagingCounter: number
    prevPage: number
    totalDocs: number
    totalPages: number
  }
  success: boolean
}

interface IsOpenList {
  [key: string]: boolean
}
interface DepartmentData {
  department: Department
  success: boolean
}
const DepartmentsDetails: React.FC = ({}) => {
  const router = useRouter()
  const { data, error } = useSWR<DepartmentData>(
    router.query.id ? `http://localhost:3000/departments/${router.query.id}` : null,
    fetcher
  )
  return (
    <>
      <Seo title='Detalhes do Departamentos' description='Detalhes do Departamentos' />
      <Layout>
        <PageTitleWrapper>
          <BackButton url='/departments' />
          <PageTitle>Detalhes do departamento</PageTitle>
        </PageTitleWrapper>
        <Content>
          {data && <CardWithLabel data={data?.department.name} dataTitle='Departamento' />}

          <SectionTitle>Listagem das unidades</SectionTitle>
          {(!data || data.department.branches.length < 1) && <p>Nenhuma unidade encontrado</p>}
          {data && data.department.branches.length > 0 && (
            <>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.Th>Nome da unidade</Table.Th>
                    <Table.Th></Table.Th>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {data.department.branches.map(branch => (
                    <Table.Row key={branch}>
                      <Table.Td>
                        <Value>{branch}</Value>
                      </Table.Td>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </>
          )}
        </Content>
      </Layout>
    </>
  )
}

export default DepartmentsDetails
