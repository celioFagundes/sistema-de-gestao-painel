import { ChangeEventHandler, FocusEventHandler } from 'react'
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
  onBlur?:  FocusEventHandler<HTMLInputElement>
  errorMessage?: string
}

const CheckboxInput = (props: Props) => {
  return (
    <Wrapper>
      <Container>
        <Label htmlFor={props.id}>{props.label}</Label>
        <InputElement
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
          onBlur = {props.onBlur}
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

export {  CheckboxInput }
