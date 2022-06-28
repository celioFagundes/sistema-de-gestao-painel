import { ChangeEventHandler } from 'react'
import { Label, Wrapper, InputElement } from './styles'

type Props = {
  id: string
  label: string
  name: string
  placeholder: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Input = (props: Props) => {
  return (
    <Wrapper >
      <Label htmlFor={props.id}>{props.label}</Label>
      <InputElement
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value = {props.value}
        placeholder={props.placeholder}
      />
    </Wrapper>
  )
}


export  {Input}
