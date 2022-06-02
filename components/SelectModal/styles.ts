import styled from '@emotion/styled'
import { BoldText, NormalText } from '../../styles/texts'

type IsOpen = {
  isOpen: boolean
}
export const Wrapper = styled.div`
  position: relative;
  @media (min-width: 768px) {
    display: none;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  margin: 40px 0;
  &:hover {
    cursor: pointer;
  }
`
export const Label = styled(NormalText)`
  font-size: 14px;
`
export const Icon = styled.div`
cursor:pointer;`
export const Modal = styled.div<IsOpen>`
  position: fixed;
  left: 4%;
  bottom: ${props => (props.isOpen ? '0' : '-1000px')};
  transition: all 0.4s ease-in-out;
  width: 92%;
  margin: 0 auto;
  padding: 32px 29px 48px 24px;
  background: #fff;
  box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
  border-radius: 12px 12px 0px 0px;
  z-index: 5000;
`
export const ModalBackground = styled.div<IsOpen>`
  position: fixed;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  z-index: 4000;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  transition: all 0.4s ease-in-out;
  background-color: ${props => (props.isOpen ? 'rgba(0,0,0,0.4)' : 'transparent')}; ;
`
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const ModalLabel = styled(BoldText)`
  font-size: 18px;
  color: #34423d;
  margin-bottom: 35px;
`
export const ModalOption = styled.div`
  padding-left: 8px;
  margin-bottom: 17px;

  &:hover {
    cursor: pointer;
  }
`
export const ModalOptionLink = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #587169;
`
