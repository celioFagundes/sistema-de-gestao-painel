import styled from '@emotion/styled'

interface isActive {
  isActive: boolean
}
interface isShown {
  isShown: boolean
}
export const Wrapper = styled.aside<isShown>`
  display: block;
  height: 100%;
  width: 100%;
  max-width: 300px;
  border-right: 1px solid #fff;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  
  @media (max-width: 768px) {
    position: fixed;
    left: ${props => (props.isShown ? '0' : '-1000px')};
    top: 50%;
    transform: translate(-0%, -50%);
    height: auto;
    width: 92%;
    max-width: none;
    margin: 0 auto;
    padding: 32px 29px 48px 24px;
    background: #fff;
    border-radius: 0 12px 12px 0;
    box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
    transition: all 0.4s ease-in-out;
    z-index: 5000;
  }
`
export const Background = styled.div<isShown>`
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${props => (props.isShown ? 'visible' : 'hidden')};
  height: 100vh;
  width: 100%;
  background-color: ${props => (props.isShown ? 'rgba(0,0,0,0.4)' : 'transparent')};
  transition: all 0.4s ease-in-out;
  z-index: 4000;
  @media (min-width: 768px) {
    display:none;
  }
`
export const MenuToggle = styled.button`
  position: absolute;
  top: 15px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.8rem;
  cursor: pointer;
  @media (min-width: 768px) {
    display:none;
  }
`
export const NavContainer = styled.nav``

export const NavList = styled.ul`
  list-style: none;
`
export const NavItem = styled.li<isActive>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  padding-right:20px;
  background-color: ${props => (props.isActive ? '#22e0a1' : '#fff')};
  border-bottom: 1px solid #eaefed;
  color: ${props => (props.isActive ? '#fff' : '#34423D')};
  transition: all 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${props => (props.isActive ? '#22e0a1' : '#abe0ce')};
    color: #fff;
  }
`
export const ItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  font-size: 22px;
`
export const ItemText = styled.div``
