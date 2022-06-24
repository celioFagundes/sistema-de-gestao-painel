import { Label, SortIcon, Wrapper } from './styles'
import { AiOutlineSortAscending } from 'react-icons/ai'

type Props = {
  label: string
  field: string
  onClick: (value:string) => void
}

const SortButton = (props: Props) => {
  return (
    <Wrapper>
      <Label htmlFor='select'>{props.label}</Label>
      <SortIcon onClick={() => props.onClick(props.field)}>
        <AiOutlineSortAscending size={16} /> 
      </SortIcon>
    </Wrapper>
  )
}

export default SortButton
