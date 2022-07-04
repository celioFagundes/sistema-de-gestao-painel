import React from 'react'
import { Header } from './Header'
import {
  Container,
 
  Main,
  MainContainer,
  MainWrapper,
  Sidebar,
  Wrapper,
} from './styles'

interface MainProps {
  children?: React.ReactNode
}
const Layout = (props: MainProps) => {
  return (
    <Wrapper>
      <Header/>
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
