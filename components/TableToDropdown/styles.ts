import styled from '@emotion/styled'
import { BoldText } from '../../styles/texts'

type TableRowType = {
  isActive?: boolean
  maxHeight?: string
  status?: string
  numberOfColumns: number
}
type GridSpan = {
  gridSpan?: boolean
}
export const TableContainer = styled.div`
  width: 100%;
`
export const TableHeaderContainer = styled.div`
  width: 100%;
  padding: 16px 0;
  border: 1px solid #cad6d1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  @media (max-width: 768px) {
    display: none;
  }
`
export const TableBodyContainer = styled.div`
  width: 100%;
`
export const Tr = styled.div<TableRowType>`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.numberOfColumns}, 1fr)`};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  color: #587169;
  color: ${props => props.status === 'inactive' && '#A3B8B0'};
  @media (max-width: 768px) {
    display: grid;
    grid-auto-flow: initial;
    grid-template-columns: 1fr 1fr;
    max-height: ${props => (props.isActive ? '1000px' : props.maxHeight)};
    overflow-y: hidden;
    transition: max-height 0.4s ease-in-out;
    background: #ffffff;
    border: 2px solid #eaefed;
    border-color: ${props => props.isActive && '#B5F1DD'};
    border-radius: 8px;
    margin: 8px 0;
    transition: max-height 0.4s ease-in-out;
    cursor: pointer;
  }
`
export const Th = styled.div<GridSpan>`
  width: 100%;
  margin-right: 10px;
  text-align: left;
  color: #587169;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  &:first-of-type {
    grid-column: ${props => props.gridSpan && 'span 2'};
  }
`
export const Td = styled.div<GridSpan>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 18px 0;
  text-align: left;
  border-bottom: 1px solid #eaefed;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  &:first-of-type {
    grid-column: ${props => props.gridSpan && 'span 2'};
  }
  &:last-of-type {
    justify-content: flex-end;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 0;
    &:first-of-type {
      grid-column: span 2;
    }
    &:last-of-type {
      grid-column: span 2;
      padding-right: 15px;
    }
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
export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px 24px;
  border: 2px solid #b5f1dd;
  border-radius: 8px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const ActionLabel = styled(BoldText)`
  color: #34423d;
  margin-left: 8px;
`
