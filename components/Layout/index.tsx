import React from 'react'
import { NavigationSelect } from '../Navigation'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import {
  Container,
  Main,
  MainContainer,
  MainWrapper,
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
