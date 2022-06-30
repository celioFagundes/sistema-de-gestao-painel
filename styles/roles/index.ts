import styled from '@emotion/styled'
import { BoldText } from '../texts'


export const Content = styled.div`
  padding: 40px 24px;
  margin-top: 24px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
`
export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`
export const DropdownIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 30%;
  @media (min-width: 768px) {
    display: none;
  }
`
export const Label = styled(BoldText)`
  margin-bottom: 6px;
  font-size: 12px;

  @media (min-width: 768px) {
    display: none;
  }
`
export const Value = styled.p`
  font-size: 12px;
`
export const DotsIcon = styled.div`
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`