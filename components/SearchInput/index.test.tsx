import { render, screen } from '@testing-library/react'
import SearchInput from './index'

describe('SearchInput', () => {
  it('renders the search input', () => {
    render(<SearchInput />)

    const label = screen.getByLabelText('Pesquisar por')
    const input = screen.getByPlaceholderText('Pesquise por nome ou cpf')
    const icon = screen.getByRole('search-icon')
    
    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    
  })
})
