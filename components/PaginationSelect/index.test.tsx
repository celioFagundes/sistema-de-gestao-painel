import { fireEvent, render, screen } from '@testing-library/react'
import PaginationSelect from './index'

describe('PaginationSelect', () => {
  it('renders the pagination select register quantity to show', () => {
    render(<PaginationSelect />)
    
    const message = screen.getByText('Mostrando 10 de 50 registros')
    const select = screen.getByTestId('pagination-select')
    const options: HTMLOptionElement[] = screen.getAllByTestId('pagination-select-option')

    fireEvent.change(select, { target: { value: 10 } })
    
    expect(message).toBeInTheDocument()
    expect(select).toBeInTheDocument()
    expect(options[0].selected).toBeFalsy()
    expect(options[1].selected).toBeTruthy()
    expect(options[2].selected).toBeFalsy()
    expect(options[3].selected).toBeFalsy()
    expect(options[4].selected).toBeFalsy()
    expect(options).toHaveLength(5)
  })
})
