import Image from 'next/image'
import Seo from '../../../../components/Seo'
import useSWR from 'swr'
import { fetcher } from '../../../../lib/fetcher'
import Layout from '../../../../components/Layout'
import { BackButton } from '../../../../components/Navigation/'
import { Card, CardIdentification, CardPhone, CardWithLabel } from '../../../../components/Cards'

import {
  PageTitleWrapper,
  Content,
  UserContainer,
  UserData,
  Username,
  Email,
  CardsWrapper,
  SectionOrganizationalData,
  UserImage,
  OrganizationalCardsWrapper,
  OrganizationalCardsRow,
} from '../../../../styles/agents/details'
import { PageTitle, SectionTitle } from '../../../../styles/texts'
import { User, Calendar } from '../../../../components/Icons'
import { useRouter } from 'next/router'
import { AgentDetails } from '../../../../types/agent'

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
          <BackButton url='/organization/agents' />
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
              <CardPhone data={data.agent.phones} />
              <Card
                Icon={Calendar}
                dataTitle='Nascimento'
                data={new Date(data.agent.birth_date).toLocaleDateString()}
              />
            </CardsWrapper>
            <SectionOrganizationalData>
              <SectionTitle>Dados Organizacionais</SectionTitle>
              <OrganizationalCardsWrapper>
                <OrganizationalCardsRow>
                  <CardWithLabel dataTitle='Departmento' data={data.agent.department} />
                  <CardWithLabel dataTitle='Cargo' data={data.agent.role} />
                </OrganizationalCardsRow>
                <OrganizationalCardsRow>
                  <CardWithLabel dataTitle='Unidade' data={data.agent.branch} />
                  <CardWithLabel
                    dataTitle='Status'
                    data={data.agent.status === 'active' ? 'Ativo' : 'Inativo'}
                  />
                </OrganizationalCardsRow>
              </OrganizationalCardsWrapper>
            </SectionOrganizationalData>
          </Content>
        )}
      </Layout>
    </>
  )
}

export default Agent
