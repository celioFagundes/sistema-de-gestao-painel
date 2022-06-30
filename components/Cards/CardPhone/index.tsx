import { useState } from 'react'
import { PhoneInterface } from '../../../types/agent'
import { Left, Phone, Right } from '../../Icons'
import { Data, DataTitle, Icon, Wrapper, DataWrapper, SwitchButton, ButtonsWrapper } from './styles'

type CardPhoneProps = {
  data: [PhoneInterface]
}

const CardPhone = (props: CardPhoneProps) => {
  const [index, setIndex] = useState(0)

  const decreaseIndex = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }
  const increaseIndex = () => {
    if (index < props.data.length - 1) {
      setIndex(index + 1)
    }
  }
  return (
    <Wrapper>
      <Icon>
        <Phone />
      </Icon>
      <DataWrapper>
        <DataTitle>Telefone</DataTitle>
        <Data>
          {props.data[index].ddi + ' ' + props.data[index].ddd + ' ' + props.data[index].number}
        </Data>
      </DataWrapper>
      <ButtonsWrapper>
        <SwitchButton onClick={decreaseIndex} isDisabled={index === 0}>
          <Left />
        </SwitchButton>
        <SwitchButton onClick={increaseIndex} isDisabled={!(index < props.data.length - 1)}>
          <Right />
        </SwitchButton>
      </ButtonsWrapper>
    </Wrapper>
  )
}
export { CardPhone }
