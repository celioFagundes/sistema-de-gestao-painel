import { ChangeEventHandler } from 'react'
import { Wrapper, Label, DDD, DDI, Number, InputContainer } from './styles'

type Props = {
  ddiName: string
  ddiValue: string
  dddName: string
  dddValue: string
  numberName: string
  numberValue: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const PhoneInput = (props: Props) => {
  return (
    <Wrapper>
      <InputContainer>
        <Label htmlFor='ddi'>DDI</Label>
        <DDI
          id='ddi'
          name={props.ddiName}
          onChange={props.onChange}
          value={props.ddiValue}
          placeholder='+55'
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor='ddd'>DDD</Label>
        <DDD
          id= 'ddd'
          name={props.dddName}
          onChange={props.onChange}
          value={props.dddValue}
          placeholder='(51)'
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor='phone-number'>Número</Label>
        <Number
          id= 'phone-number'
          name={props.numberName}
          onChange={props.onChange}
          value={props.numberValue}
          placeholder='9 1234-5678'
        />
      </InputContainer>
    </Wrapper>
  )
}

export { PhoneInput }
