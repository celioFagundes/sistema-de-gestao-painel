import { useState } from 'react'
import Search from '../Icons/Search'
import { Input, Label, Wrapper, Icon } from './styles'

type Props = {
  onSubmit: (slug: string) => void
}

const SearchInput = (props: Props) => {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (keyboardEvent: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyboardEvent.code === 'Enter') {
      props.onSubmit(inputValue)
    }
  }
  const handleInputChange = (text:string) =>{
    setInputValue(text)
  }
  return (
    <Wrapper>
      <Label htmlFor='search-input'>Pesquisar por</Label>
      <Icon>
        <Search />
      </Icon>
      <Input
        onKeyDown={handleKeyDown}
        onChange={(evt) => handleInputChange(evt.target.value)}
        placeholder='Pesquise por nome ou número do documento'
        id='search-input'
      />
    </Wrapper>
  )
}

export default SearchInput
