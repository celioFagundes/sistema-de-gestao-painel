import { fireEvent, render, screen } from '@testing-library/react'
import Select from './index'
import { matchers } from '@emotion/jest'
expect.extend(matchers)

describe('Select', () => {
  it('renders the select', () => {
    render(
      <Select label='Cargo' bgColor='#000'>
        <Select.Option value = {'Analista'}>Analista</Select.Option>
        <Select.Option value = {'Gerente'}>Gerente</Select.Option>
      </Select>
    )
    const label = screen.getByText('Cargo')
    const select = screen.getByTestId('select')
    const options: HTMLOptionElement[] = screen.getAllByTestId('select-option')
    
    fireEvent.change(select, { target: { value: 'Gerente' } })

    expect(label).toBeInTheDocument()
    expect(select).toBeInTheDocument()
    expect(select).toHaveStyleRule('background-color', '#000')

    expect(options[0].selected).toBeFalsy()
    expect(options[1].selected).toBeTruthy()
    expect(options).toHaveLength(2)
  })
})
