import Image from 'next/image'
import Seo from '../../../components/Seo'
import useSWR from 'swr'
import { fetcher } from '../../../lib/fetcher'

import Layout from '../../../components/Layout'
import BackButton from '../../../components/Navigation/BackButton'
import { Card, CardIdentification, CardPhones } from '../../../components/Card'
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
import { User, ID, Phone, Calendar } from '../../../components/Icons'
import { useRouter } from 'next/router'
import { AgentDetails } from '../../../types/agent'


interface DataProps {
  agent: AgentDetails
  success: boolean
}
const Agent: React.FC = () => {
  const router = useRouter()
  const { data, error } = useSWR<DataProps>(
    router.query.id ? `http://localhost:3000/agents/${router.query.id}` : null,
    fetcher
  )

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
                    src={'https://dummyimage.com/80x80/000/fff'}
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
              <CardIdentification data={data.agent.identification} />
              <CardPhones data={data.agent.phones} />
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

export default Agent
