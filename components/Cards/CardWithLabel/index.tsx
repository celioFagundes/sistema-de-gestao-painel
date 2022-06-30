import React from 'react'
import { Data, DataTitle, DataWrapper, Label, Wrapper } from './styles'

type CardProps = {
  dataTitle: string | number
  data: string | number
}

const CardWithLabel = (props: CardProps) => {
  return (
    <Wrapper>
      <Label>{props.dataTitle}</Label>
      <Data>{props.data}</Data>
    </Wrapper>
  )
}

export { CardWithLabel }
