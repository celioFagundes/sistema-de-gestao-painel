import { useState } from 'react'
import { IdentificationInterface, PhoneInterface } from '../../../types/agent'
import { ID, Left, Phone, Right } from '../../Icons'
import { Data, DataTitle, Icon, Wrapper, DataWrapper, SwitchButton, ButtonsWrapper } from './styles'

type CardIdentificationProps = {
  data: IdentificationInterface[]
}

const CardIdentification = (props: CardIdentificationProps) => {
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
        <ID />
      </Icon>
      <DataWrapper>
        <DataTitle>{props.data[index].type}</DataTitle>
        <Data>{props.data[index].number}</Data>
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

export { CardIdentification }
