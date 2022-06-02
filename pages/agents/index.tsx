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

interface Agent {
  agent_id: number
  name: string
  image: string
  department: string
  branch: string
  role: string
  status: string
}
interface DataProps {
  items: [Agent]
}

interface IsOpenList {
  [key: number]: boolean
}

const Agents: React.FC = ({}) => {
  const { data, error } = useSWR<DataProps>('https://pp-api-desafio.herokuapp.com/agents', fetcher)
  const [modalIsOpenList, setModalIsOpenList] = useState<IsOpenList>({})
  const [dropdownIsOpenList, setDropdownIsOpenList] = useState<IsOpenList>({})
  const [modalCategoriesIsOpen, setModalCategoriesIsOpen] = useState(false)

  useEffect(() => {
    const createActiveStatusList = () => {
      if (data) {
        const activeStatusList = data.items.reduce((prev, curr) => {
          return { ...prev, [curr.agent_id]: false }
        }, {})
        setModalIsOpenList(activeStatusList)
        setDropdownIsOpenList(activeStatusList)
      }
    }
    createActiveStatusList()
  }, [data])

  const updateActiveStatusList = (
    id: number,
    prevList: IsOpenList,
    updateFn: Dispatch<SetStateAction<IsOpenList>>
  ) => {
    let newList = { ...prevList }
    if (newList[id]) {
      Object.keys(newList).forEach(item => (newList[Number(item)] = false))
    } else {
      Object.keys(newList).forEach(item => (newList[Number(item)] = false))
      newList[id] = !newList[id]
    }
    updateFn(newList)
  }
  const toggleOptionsModal = (id: number) => {
    updateActiveStatusList(id, modalIsOpenList, setModalIsOpenList)
  }
  const toggleDropdown = (id: number) => {
    updateActiveStatusList(id, dropdownIsOpenList, setDropdownIsOpenList)
  }
  const toggleCategoriesModal = (state: boolean) => {
    setModalCategoriesIsOpen(state)
  }
  const closeAnyActiveOptionsModal = () => {
    let newList = { ...modalIsOpenList }
    Object.keys(newList).forEach(item => (newList[Number(item)] = false))
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
          <SearchInput />
          <SectionTitle>Listagem de colaboradores</SectionTitle>
          {data?.items && (
            <TableDrop>
              <TableDrop.Header>
                <TableDrop.Row numberOfColumns={7}>
                  <TableDrop.Th gridSpan>Nome Completo</TableDrop.Th>
                  <TableDrop.Th>Departamento</TableDrop.Th>
                  <TableDrop.Th>Cargo</TableDrop.Th>
                  <TableDrop.Th>Unidade</TableDrop.Th>
                  <TableDrop.Th>Status</TableDrop.Th>
                  <TableDrop.Th></TableDrop.Th>
                </TableDrop.Row>
              </TableDrop.Header>
              <TableDrop.Body>
                {data.items.map(agent => (
                  <TableDrop.Row
                    numberOfColumns={7}
                    key={agent.agent_id}
                    isActive={dropdownIsOpenList[agent.agent_id]}
                    status={agent.status}
                    maxHeight={'95px'}
                  >
                    <TableDrop.Td onClick={() => toggleDropdown(agent.agent_id)} gridSpan>
                      <Label>Nome Completo</Label>
                      <AvatarNameContainer>
                        <ImageWrapper
                          style={{ position: 'relative', minHeight: '32px', minWidth: '32px' }}
                        >
                          <Image
                            src={agent.image}
                            layout='fill'
                            objectFit='cover'
                            alt='avatar'
                            style={{ borderRadius: '50%' }}
                          />
                        </ImageWrapper>
                        <Name>{agent.name}</Name>
                      </AvatarNameContainer>
                      <DropdownIcon>
                        {!dropdownIsOpenList[agent.agent_id] ? <Down /> : <Up />}
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
                      <DotsIcon onClick={() => toggleOptionsModal(agent.agent_id)}>
                        <MoreVertical />
                      </DotsIcon>
                      <ModalOptions
                        isOpen={modalIsOpenList[agent.agent_id]}
                        closeFn={closeAnyActiveOptionsModal}
                      >
                        <ModalOptions.Option url={'/agents/1'} isActive={true} icon={Eye}>
                          Ver colaborador
                        </ModalOptions.Option>
                        <ModalOptions.Option url={'/agents/1'} isActive={false} icon={Trash}>
                          Excluir
                        </ModalOptions.Option>
                      </ModalOptions>
                      <ActionsContainer onClick={() => toggleOptionsModal(agent.agent_id)}>
                        <FilePlus />
                        <ActionLabel>Ações</ActionLabel>
                      </ActionsContainer>
                    </TableDrop.Td>
                  </TableDrop.Row>
                ))}
              </TableDrop.Body>
            </TableDrop>
          )}
          <BottomContainer>
            <PaginationSelect />
            <Pagination />
          </BottomContainer>
        </Content>
      </Layout>
    </>
  )
}

export default Agents
