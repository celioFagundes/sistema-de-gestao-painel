import styled from '@emotion/styled'
import { BoldText } from '../../styles/texts'

type buttonProps = {
  isDisabled: boolean
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    padding: 14px 24px;
    border: 2px solid #b5f1dd;
    border-radius: 8px;
    cursor: pointer;
  }
`
export const PaginationButton = styled.button<buttonProps>`
  padding: 0px 7px;
  background-color: #fff;
  color: ${props => (props.isDisabled ? '#cad6d1' : '#709085')};
  border: 1.4px solid;
  border-color: ${props => (props.isDisabled ? '#cad6d1' : '#709085')};
  border-radius: 8px 0px 0px 8px;
  transition: all 100ms ease-in-out;
  & > svg > path{
    fill: ${props => (props.isDisabled ? '#cad6d1' : '#709085')};
  }
  &:nth-of-type(2) {
    border-radius: 0px 8px 8px 0px;
  }
  &:hover {
    color: ${props => !props.isDisabled && '#000'};
    border-color: ${props => !props.isDisabled && '#000'};
    cursor: ${props => !props.isDisabled && 'pointer'};
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const PaginationLabel = styled(BoldText)`
  margin: 0 12px;
  color: #34423d;
  @media (max-width: 768px) {
    display: none;
  }
`
export const MobilePaginationLabel = styled(BoldText)`
  margin: 0 12px;
`
export const MobilePagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`
