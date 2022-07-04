import { ChangeEventHandler, MouseEventHandler } from 'react'
import { CheckboxOff, CheckboxOn } from '../../Icons'
import {
  Wrapper,
  InputElement,
  Container,
  Label,
} from './styles'
type Props = {
  id: string
  name: string
  checked: boolean
  onClick: MouseEventHandler<HTMLInputElement>
}

const CheckboxInput = (props: Props) => {
  return (
    <Wrapper>
        <Label htmlFor={props.id}>
          {props.checked ? <CheckboxOn/> : <CheckboxOff/>}
        </Label>
        <InputElement
          id={props.id}
          type = 'checkbox'
          name={props.name}
          onClick={props.onClick}
        />
    </Wrapper>
  )
}

export {  CheckboxInput }
