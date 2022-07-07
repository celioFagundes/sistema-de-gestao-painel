import styled from '@emotion/styled'

export const Wrapper = styled.aside`
  display: block;
  height: 100%;
  width: 100%;
  max-width: 300px;
  border-right: 1px solid #fff;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  @media (max-width: 768px) {
    display: none;
  }
`
export const NavContainer = styled.nav``

export const NavList = styled.ul`
  list-style: none;
`
export const NavItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eaefed;
  color:#34423D;
`
export const ItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:5px;
  font-size:22px;
`
export const ItemText = styled.div``
