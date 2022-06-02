import Image from 'next/image'
import React from 'react'
import {
  Container,
  Data,
  Header,
  LogoContainer,
  Main,
  MainContainer,
  MainWrapper,
  Sidebar,
  UserAvatar,
  UserContainer,
  UserData,
  Username,
  Wrapper,
} from './styles'

interface MainProps {
  children?: React.ReactNode
}
const Layout = (props: MainProps) => {
  return (
    <Wrapper>
      <Header>
        <LogoContainer>
          <Image src='/pedido-pago-logo.png' alt='brand logo' height={35} width={35} />
        </LogoContainer>
        <UserContainer>
          <UserAvatar>LZ</UserAvatar>
          <UserData>
            <Username>Luiz Zlochevsky</Username>
            <Data>meus dados</Data>
          </UserData>
        </UserContainer>
      </Header>
      <Main>
        <Sidebar />
        <Container>
          <MainWrapper>
            <MainContainer>{props.children}</MainContainer>
          </MainWrapper>
        </Container>
      </Main>
    </Wrapper>
  )
}

export default Layout
