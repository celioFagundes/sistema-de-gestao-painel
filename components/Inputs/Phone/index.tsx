import { ChangeEventHandler, FocusEventHandler } from 'react'
import { BiError } from 'react-icons/bi'
import NumberFormat from 'react-number-format'
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
          <NumberFormat
            customInput={DDI}
            format = '+##'
            mask = {['x','x']}
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
          <NumberFormat
            customInput={DDD}
            format = '(##)'
            mask = {['x','x']}
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
          <NumberFormat
            customInput={Number}
            format = '# ####-####'
            mask = {['x','x','x','x','x','x','x','x','x']}
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
