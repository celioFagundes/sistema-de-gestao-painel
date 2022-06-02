import styled from '@emotion/styled'

export const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0;
`
export const TableHeaderContainer = styled.thead`
  width: 100%;
`
export const TableBodyContainer = styled.tbody`
  width: 100%;
`
export const Tr = styled.tr`
  width: 100%;
`
export const Th = styled.th`
  width: 100%;
  text-align: left;
  color: #587169;
  font-weight: 600;
  font-size: 12px;
  border-top: 1px solid #cad6d1;
  border-bottom: 1px solid #cad6d1;
  &:nth-of-type(1) {
    border-top-left-radius: 8px;
    border-left: 1px solid #cad6d1;
  }
  &:last-of-type {
    border-top-right-radius: 8px;
    border-right: 1px solid #cad6d1;
  }

  padding: 16px;
`
export const Td = styled.td`
  position: relative;
  width: 100%;
  padding: 18px 16px;
  text-align: left;
  color: '#587169';
  border-bottom: 1px solid #eaefed;
  font-weight: 400;
  font-size: 12px;
  
`
