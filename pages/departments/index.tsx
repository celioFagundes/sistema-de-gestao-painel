import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import { fetcher } from '../../lib/fetcher'
import { Eye, Down, MoreVertical, Trash, Up, Edit } from '../../components/Icons'

import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import { TableDrop } from '../../components/Tables'
import { SearchInput } from '../../components/Inputs/'
import { PageSwitcher, RecordsPerPageSelect } from '../../components/Pagination/'
import { NavigationTabs, NavigationSelect, NavigateButton } from '../../components/Navigation/'
import {
  ActionsModal,
  MobileActionsToggle,
  ActionLink,
  ActionButton,
} from '../../components/ActionsModal'
import { SortSelect, SortButton } from '../../components/Sorting/'
import {
  BottomContainer,
  Content,
  DropdownIcon,
  Value,
  Label,
  DotsIcon,
} from '../../styles/agents'
import { PageTitle, SectionTitle } from '../../styles/texts'
import { Agent } from '../../types/agent'
import axios from 'axios'
import { Department } from '../../types/department'

const SORT_OPTIONS = [{ name: 'Nome ', value: 'name' }]

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

const Departments: React.FC = ({}) => {
  const [queryOptions, setQueryOptions] = useState({
    limit: 10,
    page: 1,
    field: '_id',
    criteria: 'asc',
    slug: '',
  })
  const { data, error, mutate } = useSWR<DataProps>(
    `http://localhost:3000/departments/paginated/?page=${queryOptions.page}&limit=${queryOptions.limit}&field=${queryOptions.field}&criteria=${queryOptions.criteria}&slug=${queryOptions.slug}`,
    fetcher
  )
  const [modalIsOpenList, setModalIsOpenList] = useState<IsOpenList>({})
  const [dropdownIsOpenList, setDropdownIsOpenList] = useState<IsOpenList>({})
  const [showNavigationModal, setShowNavigationModal] = useState(false)
  const [showSortSelect, setShowSortSelect] = useState(false)

  useEffect(() => {
    const createActiveStatusList = () => {
      if (data) {
        const activeStatusList = data.results.docs.reduce((prev, curr) => {
          return { ...prev, [curr._id]: false }
        }, {})
        setModalIsOpenList(activeStatusList)
        setDropdownIsOpenList(activeStatusList)
      }
    }
    createActiveStatusList()
  }, [data])

  const removeDepartment = async (id: string) => {
    await axios.delete(`http://localhost:3000/departments/${id}`)
    if (data && data.results.docs.length === 1) {
      if (queryOptions.page > 1) {
        setQueryOptions({ ...queryOptions, page: queryOptions.page - 1 })
      }
    }
    await mutate()
  }
  const handleNextPage = () => {
    if (data && data.results.hasNextPage) {
      let nextPage = queryOptions.page + 1
      setQueryOptions({ ...queryOptions, page: nextPage })
    }
  }
  const handlePrevPage = () => {
    if (data && data.results.hasPrevPage) {
      let prevPage = queryOptions.page - 1
      setQueryOptions({ ...queryOptions, page: prevPage })
    }
  }
  const handleRecordsPerPageSelect = (value: number) => {
    setQueryOptions({ ...queryOptions, limit: value, page: 1 })
  }
  const handleLoadMore = () => {
    setQueryOptions({ ...queryOptions, limit: queryOptions.limit + 10 })
  }
  const handleSearchInput = (value: string) => {
    setQueryOptions({ ...queryOptions, slug: value.trim(), page: 1 })
  }
  const handleSortButton = (value: string) => {
    if (value === queryOptions.field) {
      let changeCriteria = queryOptions.criteria === 'asc' ? 'desc' : 'asc'
      return setQueryOptions({ ...queryOptions, criteria: changeCriteria, page: 1 })
    }
    setQueryOptions({ ...queryOptions, field: value, criteria: 'asc', page: 1 })
  }
  const handleSortSelect = (field: string, criteria: string) => {
    setQueryOptions({ ...queryOptions, field: field, criteria: criteria, page: 1 })
  }

  const updateActiveStatusList = (
    _id: string,
    prevList: IsOpenList,
    updateFn: Dispatch<SetStateAction<IsOpenList>>
  ) => {
    let newList = { ...prevList }
    if (newList[_id]) {
      Object.keys(newList).forEach(item => (newList[item] = false))
    } else {
      Object.keys(newList).forEach(item => (newList[item] = false))
      newList[_id] = !newList[_id]
    }
    updateFn(newList)
  }
  const toggleOptionsModal = (_id: string) => {
    updateActiveStatusList(_id, modalIsOpenList, setModalIsOpenList)
  }
  const toggleDropdown = (_id: string) => {
    updateActiveStatusList(_id, dropdownIsOpenList, setDropdownIsOpenList)
  }
  const toggleNavigationModal = (state: boolean) => {
    setShowNavigationModal(state)
  }
  const toggleSortSelectModal = (state: boolean) => {
    setShowSortSelect(state)
  }
  const closeAnyActiveActionsModal = () => {
    let newList = { ...modalIsOpenList }
    Object.keys(newList).forEach(item => (newList[item] = false))
    setModalIsOpenList(newList)
  }
  return (
    <>
      <Seo title='Departamentos' description='Listagem dos departamentos' />
      <Layout>
        <PageTitle>Organização</PageTitle>
        <Content>
          <NavigationTabs>
            <NavigationTabs.Tab url='/agents' isActive={false}>
              Colaboradores
            </NavigationTabs.Tab>
            <NavigationTabs.Tab url='/roles' isActive={false}>
              Cargos
            </NavigationTabs.Tab>
            <NavigationTabs.Tab url='/departments' isActive={true}>
              Departamentos
            </NavigationTabs.Tab>
          </NavigationTabs>
          <NavigationSelect
            isOpen={showNavigationModal}
            openFn={() => toggleNavigationModal(true)}
            closeFn={() => toggleNavigationModal(false)}
            currentPage={'Departamentos'}
          />
          <SearchInput onSubmit={handleSearchInput} querySlug={queryOptions.slug} />
          <SectionTitle>Listagem de departamentos</SectionTitle>
          <NavigateButton url='/departments/create' label='Novo departamento' />
          <SortSelect
            isOpen={showSortSelect}
            openFn={() => toggleSortSelectModal(true)}
            closeFn={() => toggleSortSelectModal(false)}
            options={SORT_OPTIONS}
            applySortFn={handleSortSelect}
            selectedCriteria={queryOptions.criteria}
            selectedField={queryOptions.field}
          />
          {(!data || data.results.docs.length < 1) && <p>Nenhum registro encontrado</p>}
          {data && data.results.docs.length > 0 && (
            <>
              <TableDrop>
                <TableDrop.Header>
                  <TableDrop.Row numberOfColumns={2}>
                    <TableDrop.Th>
                      Nome Completo
                      <SortButton
                        field='name'
                        onClick={handleSortButton}
                        selectedCriteria={queryOptions.criteria}
                      />
                    </TableDrop.Th>
                    <TableDrop.Th></TableDrop.Th>
                  </TableDrop.Row>
                </TableDrop.Header>
                <TableDrop.Body>
                  {data.results.docs.map(department => (
                    <TableDrop.Row
                      numberOfColumns={2}
                      key={department._id}
                      isActive={dropdownIsOpenList[department._id]}
                      status={'ativo'}
                      maxHeight={'75px'}
                    >
                      <TableDrop.Td onClick={() => toggleDropdown(department._id)}>
                        <Label>Nome</Label>    
                        <Value>{department.name}</Value>             
                        <DropdownIcon>
                          {!dropdownIsOpenList[department._id] ? <Down /> : <Up />}
                        </DropdownIcon>
                      </TableDrop.Td>
                      <TableDrop.Td>
                        <DotsIcon onClick={() => toggleOptionsModal(department._id)}>
                          <MoreVertical />
                        </DotsIcon>
                        <ActionsModal
                          isOpen={modalIsOpenList[department._id]}
                          closeFn={closeAnyActiveActionsModal}
                        >
                          <ActionLink url={`/agents/${department._id}`} isActive={true} icon={Eye}>
                            Ver departamento
                          </ActionLink>
                          <ActionLink
                            url={`/agents/${department._id}/edit`}
                            isActive={true}
                            icon={Edit}
                          >
                            Editar departamento
                          </ActionLink>
                          <ActionButton
                            onClick={() => removeDepartment(department._id)}
                            isActive={true}
                            icon={Trash}
                          >
                            Excluir departamento
                          </ActionButton>
                        </ActionsModal>
                        <MobileActionsToggle onClick={() => toggleOptionsModal(department._id)} />
                      </TableDrop.Td>
                    </TableDrop.Row>
                  ))}
                </TableDrop.Body>
              </TableDrop>
              <BottomContainer>
                <RecordsPerPageSelect
                  limit={queryOptions.limit}
                  totalDocs={data.results.totalDocs}
                  onChange={handleRecordsPerPageSelect}
                />
                <PageSwitcher
                  limit={queryOptions.limit}
                  totalDocs={data.results.totalDocs}
                  page={queryOptions.page}
                  totalPages={data.results.totalPages}
                  hasPrev={data.results.hasPrevPage}
                  hasNext={data.results.hasNextPage}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                  handleLoadMore={handleLoadMore}
                />
              </BottomContainer>
            </>
          )}
        </Content>
      </Layout>
    </>
  )
}

export default Departments
