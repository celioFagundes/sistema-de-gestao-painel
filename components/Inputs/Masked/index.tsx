import { ChangeEventHandler, FocusEventHandler } from 'react'
import { default as NumberFormat } from 'react-number-format'
import {
  Label,
  Wrapper,
  InputElement,
  ErrorMessage,
  Container,
  ErrorContainer,
  ErrorIcon,
} from './styles'
import { BiError } from 'react-icons/bi'

type Props = {
  id: string
  label: string
  name: string
  placeholder: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  errorMessage?: string
  mask: string
}

interface Mask  {
  format: string
  mask: string[]

}
interface Masks {
  [key:string]: Mask
}
const masks: Masks = {
  Data:{
    format: '##/##/####',
    mask: ['d', 'd', 'm', 'm', 'a', 'a', 'a', 'a']
  },
  CPF:{
    format: '###.###.###-##',
    mask: ['x','x','x','x','x','x','x','x','x','x','x']
  },
  CNH:{
    format: '###########',
    mask: ['x','x','x','x','x','x','x','x','x','x','x']
  },
  RG:{
    format: '##########',
    mask: ['x','x','x','x','x','x','x','x','x','x']
  }
}
const MaskedInput = (props: Props) => {
  return (
    <Wrapper>
      <Container>
        <Label htmlFor={props.id}>{props.label}</Label>
        <NumberFormat
          customInput={InputElement}
          format={masks[props.mask].format}
          mask={masks[props.mask].mask}
          id={props.id}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          placeholder={props.placeholder}
        />
      </Container>
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

export { MaskedInput }
