import { Data, Wrapper,  LogoContainer, UserContainer, UserAvatar, UserData, Username } from './styles'

const Header = () => {
  return (
    <Wrapper>
        <LogoContainer>
        </LogoContainer>
        <UserContainer>
          <UserAvatar>CP</UserAvatar>
          <UserData>
            <Username>Célio Pieczarka</Username>
            <Data>meus dados</Data>
          </UserData>
        </UserContainer>
      </Wrapper>
  )
}

export { Header }
