import {  render, screen,} from '@testing-library/react'
import SelectModal from './index'

describe('SelectModal', () => {
  it('renders the select modal when opened', () => {
    render(
      <SelectModal label='Colaboradores' isOpen={true} openFn={jest.fn()} closeFn={jest.fn()} />
    )
    const label = screen.getByTestId('label')
    const moreVerticalIcon = screen.getByRole('more-vertical-icon')
    const modal = screen.getByTestId('modal')
    const modalBackground = screen.getByTestId('modal-background')

    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent('Colaboradores')

    expect(moreVerticalIcon).toBeInTheDocument()

    expect(modal).toBeInTheDocument()
    expect(modal).toHaveClass('css-cm2gk6')

    expect(modalBackground).toHaveClass('css-1sbyw1o')
  })
  it('renders the select modal when closed', () => {
    render(
      <SelectModal label='Colaboradores' isOpen={false} openFn={jest.fn()} closeFn={jest.fn()} />
    )
    const label = screen.getByTestId('label')
    const moreVerticalIcon = screen.getByRole('more-vertical-icon')
    const modal = screen.getByTestId('modal')
    const modalBackground = screen.getByTestId('modal-background')

    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent('Colaboradores')

    expect(moreVerticalIcon).toBeInTheDocument()

    expect(modal).toBeInTheDocument()
    expect(modal).toHaveClass('css-137hrm7')

    expect(modalBackground).toBeInTheDocument()
    expect(modalBackground).toHaveClass('css-vt2u1g')
  })
  
})
