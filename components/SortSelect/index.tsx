import React from 'react'
import { Label, OptionLabel, Selection, ToggleSelect, Wrapper } from './styles'
import { AiOutlineSortAscending } from 'react-icons/ai'
type Props = {
  children: React.ReactNode
}

type OptionProps = {
  children: React.ReactNode
  value?: string
}
const SortSelect = (props: Props) => {
  return (
    <Wrapper>
      <ToggleSelect>
        <Label>Ordenar por </Label>
        <AiOutlineSortAscending size={22} color ={'#000'}/>
      </ToggleSelect>

      <Selection id='select' data-testid='select'>
        {props.children}
      </Selection>
    </Wrapper>
  )
}
const Option = (props: OptionProps) => {
  return (
    <OptionLabel value={props.value} data-testid='select-option'>
      {props.children}
    </OptionLabel>
  )
}
SortSelect.Option = Option
export default SortSelect
