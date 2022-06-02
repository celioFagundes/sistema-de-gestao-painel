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
const Table = (props: MainProps) => {
  return <TableContainer>{props.children}</TableContainer>
}
const TableHeader = (props: MainProps) => {
  return <TableHeaderContainer>{props.children}</TableHeaderContainer>
}
const TableBody = (props: MainProps) => {
  return <TableBodyContainer>{props.children}</TableBodyContainer>
}
const TableRow = (props: MainProps) => {
  return <Tr>{props.children}</Tr>
}
const TableTh = (props: MainProps) => {
  return <Th>{props.children}</Th>
}
const TableTd = (props: MainProps) => {
  return <Td>{props.children}</Td>
}


Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow
Table.Th = TableTh
Table.Td = TableTd

export default Table
