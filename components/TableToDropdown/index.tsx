import React from 'react'
import {
  TableBodyContainer,
  TableContainer,
  TableHeaderContainer,
  Td,
  Th,
  Tr,
} from './styles'

interface MainProps {
  children?: React.ReactNode
}
interface TableRowType  {
  children?: React.ReactNode
  numberOfColumns: number
  isActive?: boolean
  maxHeight?: string
  status?: string
}
interface TableTDType{
  children?: React.ReactNode
  gridSpan?: boolean
  onClick?: () => void
}
interface TableTHType{
  children?: React.ReactNode
  gridSpan?: boolean
}

const TableDrop = (props: MainProps) => {
  return <TableContainer>{props.children}</TableContainer>
}
const TableHeader = (props:  MainProps) => {
  return <TableHeaderContainer {...props} data-testid ='tabledrop-header'>{props.children}</TableHeaderContainer>
}
const TableBody = (props: MainProps) => {
  return <TableBodyContainer>{props.children}</TableBodyContainer>
}
const TableRow = (props: TableRowType) => {
  return <Tr {...props} data-testid ='tabledrop-row'>{props.children}</Tr>
}
const TableTh = (props: TableTHType) => {
  return <Th  {...props} data-testid ='tabledrop-th'>{props.children}</Th>
}
const TableTd = (props: TableTDType) => {
  return <Td {...props} data-testid ='tabledrop-td'>{props.children}</Td>
}

TableDrop.Header = TableHeader
TableDrop.Body = TableBody
TableDrop.Row = TableRow
TableDrop.Th = TableTh
TableDrop.Td = TableTd

export default TableDrop
