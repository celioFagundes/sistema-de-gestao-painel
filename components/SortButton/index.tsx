import {  SortIcon, Wrapper } from './styles'
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'

type Props = {
  field: string
  selectedCriteria: string
  onClick: (value:string) => void
}

const SortButton = (props: Props) => {
  return (
    <Wrapper>
      <SortIcon onClick={() => props.onClick(props.field)}>
      {props.selectedCriteria === 'asc' 
          ?  <AiOutlineSortAscending size = {18}/>
          : <AiOutlineSortDescending size = {18}/>}
      </SortIcon>
    </Wrapper>
  )
}

export default SortButton
