import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Seo from '../../components/Seo'

import { TableDrop } from '../../components/Tables/TableToDropdown'
import Layout from '../../components/Layout'
import {
  ActionButton,
  ActionLink,
  ActionsModal,
  MobileActionsToggle,
} from '../../components/ActionsModal'
import { SearchInput } from '../../components/Inputs/'
import { PageSwitcher, RecordsPerPageSelect } from '../../components/Pagination/'
import { NavigateButton, NavigationSelect, NavigationTabs } from '../../components/Navigation/'
import { Content, DropdownIcon, Value, Label, DotsIcon, BottomContainer } from '../../styles/roles'
import { PageTitle, SectionTitle } from '../../styles/texts'
import {
  Eye,
  Down,
  Up,
  Edit,
  Repeat,
  MoreVertical,
  CheckboxOn,
  CheckboxOff,
} from '../../components/Icons/'
import useSWR from 'swr'
import { fetcher } from '../../lib/fetcher'
import { Role } from '../../types/role'
import { SortButton, SortSelect } from '../../components/Sorting'

const SORT_OPTIONS = [{ name: 'Cargo', value: 'name' }]
interface DataProps {
  results: {
    docs: Role[]
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
const Roles: React.FC = () => {
  const [queryOptions, setQueryOptions] = useState({
    limit: 10,
    page: 1,
    field: '_id',
    criteria: 'asc',
    slug: '',
  })
  const { data, error, mutate } = useSWR<DataProps>(
    `http://localhost:3000/roles/paginated/?page=${queryOptions.page}&limit=${queryOptions.limit}&field=${queryOptions.field}&criteria=${queryOptions.criteria}&slug=${queryOptions.slug}`,
    fetcher
  )
  const [modalIsOpenList, setModalIsOpenList] = useState<IsOpenList>({})
  const [dropdownIsOpenList, setDropdownIsOpenList] = useState<IsOpenList>({})
  const [showNavigationModal, setShowNavigationModal] = useState(false)
  const [showSortSelect, setShowSortSelect] = useState(false)
  useEffect(() => {
    if (data) {
      const createActiveStatusList = () => {
        const activeStatusList = data.results.docs.reduce((prev, curr) => {
          return { ...prev, [curr._id]: false }
        }, {})
        setModalIsOpenList(activeStatusList)
        setDropdownIsOpenList(activeStatusList)
      }
      createActiveStatusList()
    }
  }, [data])

  const updateActiveStatusList = (
    id: string,
    prevList: IsOpenList,
    updateFn: Dispatch<SetStateAction<IsOpenList>>
  ) => {
    let newList = { ...prevList }
    if (newList[id]) {
      Object.keys(newList).forEach(item => (newList[item] = false))
    } else {
      Object.keys(newList).forEach(item => (newList[item] = false))
      newList[id] = !newList[id]
    }
    updateFn(newList)
  }
  const toggleOptionsModal = (id: string) => {
    updateActiveStatusList(id, modalIsOpenList, setModalIsOpenList)
  }
  const toggleDropdown = (id: string) => {
    updateActiveStatusList(id, dropdownIsOpenList, setDropdownIsOpenList)
  }
  const toggleNavigationModal = (state: boolean) => {
    setShowNavigationModal(state)
  }

  const toggleSortSelectModal = (state: boolean) => {
    setShowSortSelect(state)
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
  const closeAnyActiveOptionsModal = () => {
    let newList = { ...modalIsOpenList }
    Object.keys(newList).forEach(item => (newList[item] = false))
    setModalIsOpenList(newList)
  }

  return (
    <>
      <Seo title='Cargos' description='Listagem de cargos' />
      <Layout>
        <PageTitle>Organização</PageTitle>
        <Content>
          <NavigationTabs>
            <NavigationTabs.Tab url='/agents' isActive={false}>
              Colaboradores
            </NavigationTabs.Tab>
            <NavigationTabs.Tab url='/roles' isActive={true}>
              Cargos
            </NavigationTabs.Tab>
          </NavigationTabs>

          <NavigationSelect
            isOpen={showNavigationModal}
            openFn={() => toggleNavigationModal(true)}
            closeFn={() => toggleNavigationModal(false)}
            currentPage={'Cargos'}
          />
          <SearchInput onSubmit={handleSearchInput} querySlug={queryOptions.slug} />
          <SectionTitle>Listagem de cargos e permissões</SectionTitle>
          <NavigateButton url='/roles/create' label='Novo cargo'/>
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
                  <TableDrop.Row numberOfColumns={5}>
                    <TableDrop.Th>
                      Cargo
                      <SortButton
                        field='name'
                        onClick={handleSortButton}
                        selectedCriteria={queryOptions.criteria}
                      />
                    </TableDrop.Th>
                    <TableDrop.Th>Ler</TableDrop.Th>
                    <TableDrop.Th>Escrever</TableDrop.Th>
                    <TableDrop.Th>Excluir</TableDrop.Th>
                    <TableDrop.Th></TableDrop.Th>
                  </TableDrop.Row>
                </TableDrop.Header>
                <TableDrop.Body>
                  {data.results.docs.map(role => (
                    <TableDrop.Row
                      numberOfColumns={5}
                      key={role._id}
                      isActive={dropdownIsOpenList[role._id]}
                      maxHeight={'78px'}
                    >
                      <TableDrop.Td onClick={() => toggleDropdown(role._id)}>
                        <Label>Cargo</Label>
                        <Value>{role.name}</Value>
                        <DropdownIcon>
                          {!dropdownIsOpenList[role._id] ? <Down /> : <Up />}
                        </DropdownIcon>
                      </TableDrop.Td>
                      <TableDrop.Td onClick={() => toggleDropdown(role._id)}>
                        <Label>Ler</Label>
                        {role.permissions.includes('read') ? <CheckboxOn /> : <CheckboxOff />}
                      </TableDrop.Td>
                      <TableDrop.Td onClick={() => toggleDropdown(role._id)}>
                        <Label>Escrever</Label>
                        {role.permissions.includes('write') ? <CheckboxOn /> : <CheckboxOff />}
                      </TableDrop.Td>
                      <TableDrop.Td onClick={() => toggleDropdown(role._id)}>
                        <Label>Excluir</Label>
                        {role.permissions.includes('delete') ? <CheckboxOn /> : <CheckboxOff />}
                      </TableDrop.Td>
                      <TableDrop.Td>
                        <DotsIcon onClick={() => toggleOptionsModal(role._id)}>
                          <MoreVertical />
                        </DotsIcon>
                        <ActionsModal
                          isOpen={modalIsOpenList[role._id]}
                          closeFn={closeAnyActiveOptionsModal}
                        >
                          <ActionLink url={`/roles/${role._id}`} isActive={true} icon={Eye}>
                            Ver cargo
                          </ActionLink>
                          <ActionLink url={'/roles/1'} isActive={false} icon={Edit}>
                            Editar
                          </ActionLink>
                          <ActionButton onClick={() => ''} isActive={false} icon={Repeat}>
                            Excluir
                          </ActionButton>
                        </ActionsModal>
                        <MobileActionsToggle onClick={() => toggleOptionsModal(role._id)} />
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

export default Roles
