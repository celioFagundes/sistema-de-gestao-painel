import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { BiError } from 'react-icons/bi'
import {
  ErrorContainer,
  ErrorIcon,
  ErrorMessage,
  Label,
  OptionLabel,
  Selection,
  Wrapper,
} from './styles'

type Props = {
  label: string
  children: React.ReactNode
  bgColor?: string
  name: string
  onChange: ChangeEventHandler<HTMLSelectElement>
  onBlur?:  FocusEventHandler<HTMLSelectElement>
  errorMessage?: string
}

type OptionProps = {
  children: React.ReactNode
  value?: string
}
const Select = (props: Props) => {
  return (
    <Wrapper>
      <Label htmlFor='select'>{props.label}</Label>
      <Selection
        onBlur={props.onBlur}
        onChange={props.onChange}
        name={props.name}
        id='select'
        data-testid='select'
        bgColor={props.bgColor}
      >
        <option hidden value=''>
          Selecionar
        </option>
        {props.children}
      </Selection>
      {props.errorMessage && (
        <ErrorContainer>
          <ErrorIcon>
            <BiError />
          </ErrorIcon>
          <ErrorMessage>{props.errorMessage}</ErrorMessage>
        </ErrorContainer>
      )}
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
Select.Option = Option
export default Select
