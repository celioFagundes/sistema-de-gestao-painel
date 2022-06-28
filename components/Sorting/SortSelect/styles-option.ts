import styled from '@emotion/styled'
import { BoldText, LightText } from '../../../styles/texts'

type isChecked = {
  isChecked: boolean
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 17px;
  padding-left: 8px;
  cursor: pointer;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`
export const Name = styled.div`
  width: 100%;
`
export const OrdersContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  @media (max-width: 400px) {
    justify-content: flex-start;
  }
`
export const Order = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  @media (max-width: 400px) {
    justify-content: flex-start;
  }
`
export const OrderLabel = styled(BoldText)``
export const CheckToggle = styled.button<isChecked>`
  height: 20px;
  width: 20px;
  border: 3px solid #abe0ce;
  border-radius: 50%;
  background-color: ${props => (props.isChecked ? '#22e0a1' : '#fff')};
  cursor: pointer;
  margin: 0 10px;
`
