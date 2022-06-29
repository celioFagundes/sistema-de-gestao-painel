import { ChangeEventHandler, FocusEventHandler } from 'react'
import { BiError } from 'react-icons/bi'
import {
  Wrapper,
  Label,
  DDD,
  DDI,
  Number,
  InputContainer,
  ErrorContainer,
  ErrorIcon,
  ErrorMessage,
  Container,
} from './styles'

type Props = {
  ddiName: string
  ddiValue: string
  dddName: string
  dddValue: string
  numberName: string
  numberValue: string
  onChange: ChangeEventHandler<HTMLInputElement>
  errorMessage?: string
  onBlur?: FocusEventHandler<HTMLInputElement>
}

const PhoneInput = (props: Props) => {
  return (
    <Wrapper>
      <Container>
        <InputContainer>
          <Label htmlFor='ddi'>DDI</Label>
          <DDI
            id='ddi'
            name={props.ddiName}
            onChange={props.onChange}
            value={props.ddiValue}
            placeholder='+55'
            onBlur={props.onBlur}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor='ddd'>DDD</Label>
          <DDD
            id='ddd'
            name={props.dddName}
            onChange={props.onChange}
            value={props.dddValue}
            placeholder='(51)'
            onBlur={props.onBlur}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor='phone-number'>Número</Label>
          <Number
            id='phone-number'
            name={props.numberName}
            onChange={props.onChange}
            value={props.numberValue}
            placeholder='9 1234-5678'
            onBlur={props.onBlur}
          />
        </InputContainer>
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

export { PhoneInput }
