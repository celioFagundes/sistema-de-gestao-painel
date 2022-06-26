import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Image from 'next/image'
import Seo from '../../components/Seo'
import Eye from '../../components/Icons/Eye'

import Layout from '../../components/Layout'
import TableDrop from '../../components/TableToDropdown'
import SearchInput from '../../components/SearchInput'
import PaginationSelect from '../../components/PaginationSelect'
import Pagination from '../../components/Pagination'
import SelectModal from '../../components/SelectModal'
import Tabs from '../../components/Tabs'
import ModalOptions from '../../components/ModalOptions'
import SortSelect from '../../components/SortSelect'
import SortButton from '../../components/SortButton'

import {
  ActionLabel,
  DropdownIcon,
  Value,
  Label,
  ActionsContainer,
  DotsIcon,
} from '../../components/TableToDropdown/styles'
import {
  AvatarNameContainer,
  ImageWrapper,
  Name,
  Status,
  BottomContainer,
  Content,
} from '../../styles/agents'
import { PageTitle, SectionTitle } from '../../styles/texts'
import Trash from '../../components/Icons/Trash'
import Down from '../../components/Icons/Down'
import Up from '../../components/Icons/Up'
import FilePlus from '../../components/Icons/FilePlus'
import MoreVertical from '../../components/Icons/MoreVertical'
import { fetcher } from '../../lib/fetcher'
import useSWR from 'swr'

const sortOptions = [
  {name: 'Nome completo', value: 'name'},
  {name: 'Departamento', value: 'department'},
  {name: 'Cargo', value: 'role'},
  {name: 'Unidade', value: 'branch'},
  {name: 'Status', value: 'status'},
  
]
interface Agent {
  _id: string
  name: string
  image: string
  department: string
  branch: string
  role: string
  status: string
}
interface DataProps {
  results: {
    docs: [Agent]
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

const Agents: React.FC = ({}) => {
  const [queryOptions, setQueryOptions] = useState({
    limit: 10,
    page: 1,
    field: '_id',
    criteria: 'asc',
    slug: '',
  })
  const { data, error } = useSWR<DataProps>(
    `http://localhost:3000/agents/?page=${queryOptions.page}&limit=${queryOptions.limit}&field=${queryOptions.field}&criteria=${queryOptions.criteria}&slug=${queryOptions.slug}`,
    fetcher
  )
  const [modalIsOpenList, setModalIsOpenList] = useState<IsOpenList>({})
  const [dropdownIsOpenList, setDropdownIsOpenList] = useState<IsOpenList>({})
  const [modalCategoriesIsOpen, setModalCategoriesIsOpen] = useState(false)
  const [modalMobileSort, setModalMobileSort] = useState(true)

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
  const handleSelectLimit = (value: number) => {
    setQueryOptions({ ...queryOptions, limit: value, page: 1 })
  }
  const handleLoadMore = () => {
    setQueryOptions({ ...queryOptions, limit: queryOptions.limit + 10 })
  }
  const handleSearchInput = (value: string) => {
    setQueryOptions({ ...queryOptions, slug: value.trim(), page: 1 })
  }
  const handleSort = (value: string) => {
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
  const toggleCategoriesModal = (state: boolean) => {
    setModalCategoriesIsOpen(state)
  }
  const toggleMobileSortModal = (state: boolean) => {
    setModalMobileSort(state)
  }
  const closeAnyActiveOptionsModal = () => {
    let newList = { ...modalIsOpenList }
    Object.keys(newList).forEach(item => (newList[item] = false))
    setModalIsOpenList(newList)
  }
  return (
    <>
      <Seo title='Colaboradores' description='Listagem dos colaboradores' />
      <Layout>
        <PageTitle>Organização</PageTitle>
        <Content>
          <Tabs>
            <Tabs.Tab url='/agents' isActive={true}>
              Colaboradores
            </Tabs.Tab>
            <Tabs.Tab url='/roles' isActive={false}>
              Cargos
            </Tabs.Tab>
          </Tabs>
          <SelectModal
            isOpen={modalCategoriesIsOpen}
            openFn={() => toggleCategoriesModal(true)}
            closeFn={() => toggleCategoriesModal(false)}
            label={'Colaboradores'}
          />
          <SortSelect
            isOpen={modalMobileSort}
            openFn={() => toggleMobileSortModal(true)}
            closeFn={() => toggleMobileSortModal(false)}
            options= {sortOptions}
            applySortFn = {handleSortSelect}
            selectedCriteria={ queryOptions.criteria}
            selectedField={ queryOptions.field}
          >
          </SortSelect>
          <SearchInput onSubmit={handleSearchInput} querySlug={queryOptions.slug} />
          <SectionTitle>Listagem de colaboradores</SectionTitle>
          {(!data || data.results.docs.length < 1) && <p>Nenhum registro encontrado</p>}
          {data && data.results.docs.length > 0 && (
            <>
              <TableDrop>
                <TableDrop.Header>
                  <TableDrop.Row numberOfColumns={7}>
                    <TableDrop.Th gridSpan>
                      <SortButton label='Nome completo' field='name' onClick={handleSort} />
                    </TableDrop.Th>
                    <TableDrop.Th gridSpan>
                      <SortButton label='Departamento' field='department' onClick={handleSort} />
                    </TableDrop.Th>
                    <TableDrop.Th gridSpan>
                      <SortButton label='Cargo' field='role' onClick={handleSort} />
                    </TableDrop.Th>
                    <TableDrop.Th gridSpan>
                      <SortButton label='Unidade' field='branch' onClick={handleSort} />
                    </TableDrop.Th>
                    <TableDrop.Th gridSpan>
                      <SortButton label='Status' field='status' onClick={handleSort} />
                    </TableDrop.Th>
                    <TableDrop.Th></TableDrop.Th>
                  </TableDrop.Row>
                </TableDrop.Header>
                <TableDrop.Body>
                  {data.results.docs.map(agent => (
                    <TableDrop.Row
                      numberOfColumns={7}
                      key={agent._id}
                      isActive={dropdownIsOpenList[agent._id]}
                      status={agent.status}
                      maxHeight={'95px'}
                    >
                      <TableDrop.Td onClick={() => toggleDropdown(agent._id)} gridSpan>
                        <Label>Nome Completo</Label>
                        <AvatarNameContainer>
                          <ImageWrapper
                            style={{ position: 'relative', minHeight: '32px', minWidth: '32px' }}
                          ></ImageWrapper>
                          <Name>{agent.name}</Name>
                        </AvatarNameContainer>
                        <DropdownIcon>
                          {!dropdownIsOpenList[agent._id] ? <Down /> : <Up />}
                        </DropdownIcon>
                      </TableDrop.Td>

                      <TableDrop.Td>
                        <Label>Departamento</Label>
                        <Value>{agent.department}</Value>
                      </TableDrop.Td>
                      <TableDrop.Td>
                        <Label>Cargo</Label>
                        <Value>{agent.role}</Value>
                      </TableDrop.Td>
                      <TableDrop.Td>
                        <Label>Unidade</Label>
                        <Value>{agent.branch}</Value>
                      </TableDrop.Td>
                      <TableDrop.Td>
                        <Label>Status</Label>
                        <Status status={agent.status}>
                          {agent.status === 'active' ? 'Ativo' : 'Inativo'}
                        </Status>
                      </TableDrop.Td>

                      <TableDrop.Td>
                        <DotsIcon onClick={() => toggleOptionsModal(agent._id)}>
                          <MoreVertical />
                        </DotsIcon>
                        <ModalOptions
                          isOpen={modalIsOpenList[agent._id]}
                          closeFn={closeAnyActiveOptionsModal}
                        >
                          <ModalOptions.Option url={'/agents/1'} isActive={true} icon={Eye}>
                            Ver colaborador
                          </ModalOptions.Option>
                          <ModalOptions.Option url={'/agents/1'} isActive={false} icon={Trash}>
                            Excluir
                          </ModalOptions.Option>
                        </ModalOptions>
                        <ActionsContainer onClick={() => toggleOptionsModal(agent._id)}>
                          <FilePlus />
                          <ActionLabel>Ações</ActionLabel>
                        </ActionsContainer>
                      </TableDrop.Td>
                    </TableDrop.Row>
                  ))}
                </TableDrop.Body>
              </TableDrop>
              <BottomContainer>
                <PaginationSelect
                  limit={queryOptions.limit}
                  totalDocs={data.results.totalDocs}
                  onChange={handleSelectLimit}
                />
                <Pagination
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

export default Agents
