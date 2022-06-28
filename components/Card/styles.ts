import styled from '@emotion/styled'
import { BoldText, LightText } from '../../styles/texts'

type buttonProps = {
  isDisabled: boolean
}
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-right: 24px;
  padding: 16px;
  background: #f5faf8;
  border: 2px solid #cad6d1;
  border-radius: 8px;

  
  @media (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 40px;
  }
`
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  margin-right: 8px;
  background: #cad6d1;
  color: #465953;
  border-radius: 50%;
`
export const DataWrapper = styled.div`
  margin-right: 20px;
`
export const DataTitle = styled(LightText)`
  font-size: 12px;
`
export const Data = styled(BoldText)`
  font-size: 14px;
  width: max-content;
`
export const ButtonsWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: -35px;
`
export const SwitchButton = styled.button<buttonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  height: 100%;
  background: #f5faf8;
  border: 2px solid ;
  border-color: ${props => (props.isDisabled ? '#cad6d1' : '#709085')};
  border-radius: 8px;
  cursor: pointer;
  & > svg > path {
    fill: ${props => (props.isDisabled ? '#cad6d1' : '#709085')};
  }
  &:hover {
    color: ${props => !props.isDisabled && '#000'};
    border-color: ${props => !props.isDisabled && '#000'};
    cursor: ${props => !props.isDisabled && 'pointer'};
  }
`
