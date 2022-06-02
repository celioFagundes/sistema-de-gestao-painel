import Search from '../Icons/Search'
import { Input, Label, Wrapper, Icon } from './styles'
type Props = {}

const SearchInput = (props: Props) => {
  return (
    <Wrapper>
      <Label htmlFor='search-input'>Pesquisar por</Label>
      <Icon >
        <Search />
      </Icon>
      <Input placeholder='Pesquise por nome ou cpf' id ='search-input'/>
    </Wrapper>
  )
}

export default SearchInput
