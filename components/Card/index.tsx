import { Data, DataTitle, Icon, Wrapper, DataWrapper } from './styles'

type Props = {
    Icon: React.FC 
    dataTitle: string | number
    data: string | number
}

const Card = (props: Props) => {
  return (
    <Wrapper>
      <Icon>
        <props.Icon/>
      </Icon>
      <DataWrapper>
        <DataTitle>{props.dataTitle}</DataTitle>
        <Data>{props.data}</Data>
      </DataWrapper>
    </Wrapper>
  )
}

export default Card
