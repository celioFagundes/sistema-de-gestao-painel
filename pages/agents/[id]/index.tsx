import Image from 'next/image'
import Seo from '../../../components/Seo'

import Layout from '../../../components/Layout'
import BackButton from '../../../components/BackButton'
import Card from '../../../components/Card'
import Select from '../../../components/Select'

import {
  PageTitleWrapper,
  Content,
  UserContainer,
  UserData,
  Username,
  Email,
  CardsWrapper,
  SectionOrganizationalData,
  SelectsContainerWrapper,
  SelectsRow,
  UserImage,
} from '../../../styles/agents/details'
import { PageTitle, SectionTitle } from '../../../styles/texts'
import User from '../../../components/Icons/User'
import ID from '../../../components/Icons/ID'
import Phone from '../../../components/Icons/Phone'
import Calendar from '../../../components/Icons/Calender;'
import useSWR from 'swr'
import { fetcher } from '../../../lib/fetcher'

interface Phone {
  ddd: number
  ddi: number
  number: number
}
interface Document {
  type: string
  number: number
}
interface Agent {
  id: number
  name: string
  image: string
  department: string
  branch: string
  role: string
  status: boolean
  email: string
  phone: Phone
  document: Document
  birth_date: Date
}

interface DataProps {
  agent: Agent
}
const Colaborador: React.FC = () => {
  const { data, error } = useSWR<DataProps>('https://pp-api-desafio.herokuapp.com/agent/1', fetcher)
  
  const transformCPF = (text: string) => {
    const badchars = /[^\d]/g
    const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/
    const cpf = new String(text).replace(badchars, '')
    return cpf.replace(mask, '$1.$2.$3-$4')
  }
  return (
    <>
      <Seo title='Detalhe do colaborador' description='Detalhes do colaborador' />
      <Layout>
        <PageTitleWrapper>
          <BackButton url='/agents' />
          <PageTitle>Detalhes do colaborador</PageTitle>
        </PageTitleWrapper>
        {data && (
          <Content>
            <UserContainer>
              <UserImage>
                {data.agent.image ? (
                  <Image
                    src={data.agent.image}
                    layout='fixed'
                    height={80}
                    width={80}
                    objectFit='cover'
                    alt='avatar'
                    style={{ borderRadius: '50%' }}
                  />
                ) : (
                  <User />
                )}
              </UserImage>

              <UserData>
                <Username>{data.agent.name}</Username>
                <Email>{data.agent.email}</Email>
              </UserData>
            </UserContainer>
            <SectionTitle>Informações pessoais</SectionTitle>
            <CardsWrapper>
              <Card
                Icon={ID}
                dataTitle={data.agent.document.type}
                data={transformCPF(data.agent.document.number.toString())}
              />
              <Card
                Icon={Phone}
                dataTitle='Telefone'
                data={`+${data.agent.phone.ddi} ${data.agent.phone.ddd} ${data.agent.phone.number}`}
              />
              <Card
                Icon={Calendar}
                dataTitle='Nascimento'
                data={new Date(data.agent.birth_date).toLocaleDateString()}
              />
            </CardsWrapper>
            <SectionOrganizationalData>
              <SectionTitle>Dados Organizacionais</SectionTitle>
              <SelectsContainerWrapper>
                <SelectsRow>
                  <Select label='Departamento' bgColor='#F5FAF8'>
                    <Select.Option>Comercial</Select.Option>
                  </Select>
                  <Select label='Cargo' bgColor='#F5FAF8'>
                    <Select.Option>Gerente</Select.Option>
                  </Select>
                </SelectsRow>
                <SelectsRow>
                  <Select label='Unidade' bgColor='#F5FAF8'>
                    <Select.Option>Unidade 1</Select.Option>
                  </Select>
                  <Select label='Status' bgColor='#F5FAF8'>
                    <Select.Option>Ativo</Select.Option>
                  </Select>
                </SelectsRow>
              </SelectsContainerWrapper>
            </SectionOrganizationalData>
          </Content>
        )}
      </Layout>
    </>
  )
}

export default Colaborador
