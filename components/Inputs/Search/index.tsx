import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {Search} from '../../Icons'
import { Input, Label, Wrapper, Icon, SearchResults, ResetSearchButton } from './styles'

type Props = {
  onSubmit: (slug: string) => void
  querySlug: string
}

const SearchInput = (props: Props) => {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (keyboardEvent: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyboardEvent.code === 'Enter') {
      props.onSubmit(inputValue)
    }
  }
  const handleInputChange = (text: string) => {
    setInputValue(text)
  }
  const resetSearch = () => {
    setInputValue('')
    props.onSubmit('')
  }
  return (
    <>
      <Wrapper>
        <Label htmlFor='search-input'>Pesquisar por</Label>
        <Icon>
          <Search />
        </Icon>
        <Input
          onKeyDown={handleKeyDown}
          onChange={evt => handleInputChange(evt.target.value)}
          placeholder='Pesquise por nome ou número do documento'
          value={inputValue}
          id='search-input'
        />
      </Wrapper>
      {props.querySlug !== '' && (
        <SearchResults>
          <p>Mostrando resultados para "{props.querySlug}"</p>
          <ResetSearchButton onClick={resetSearch}>
            <AiOutlineClose size={18} />
          </ResetSearchButton>
        </SearchResults>
      )}
    </>
  )
}

export { SearchInput}
