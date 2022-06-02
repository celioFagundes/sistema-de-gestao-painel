import {  render, screen } from '@testing-library/react'
import ModalOptions from './index'
import Eye from '../Icons/Eye'
import Trash from '../Icons/Trash'
import { matchers } from '@emotion/jest'
expect.extend(matchers)
describe('ModalOptions', () => {
  it('renders the modal options with corrent styles', () => {
    render(
      <ModalOptions isOpen={true} closeFn={jest.fn()}>
        <ModalOptions.Option url={'/agents/1'} isActive={true} icon={Eye}>
          Ver colaborador
        </ModalOptions.Option>
        <ModalOptions.Option url={'/agents/1'} isActive={false} icon={Trash}>
          Excluir
        </ModalOptions.Option>
      </ModalOptions>
    )
    const modal = screen.getByTestId('modal-options')
    const modalBackground = screen.getByTestId('modal-options-background')
    const eyeIcon = screen.getByTestId('eye')
    const trashIcon = screen.getByTestId('trash')
    const option1 = screen.getByText('Ver colaborador')
    const option2 = screen.getByText('Excluir')

    expect(modal).toBeInTheDocument()
    expect(modalBackground).toBeInTheDocument()

    expect(modal).toHaveClass('css-c3qutb')
    expect(modalBackground).toHaveClass('css-1j6zrpp')
    
    expect(eyeIcon).toBeInTheDocument()
    expect(trashIcon).toBeInTheDocument()
    expect(option1).toBeInTheDocument()
    expect(option1).toHaveStyleRule('color','#587169')
    expect(option2).toBeInTheDocument()
    expect(option2).toHaveStyleRule('color','#A3B8B0')
  })
  it('renders the modal options opened', () => {
    render(
      <ModalOptions isOpen={true} closeFn={jest.fn()}>
        <ModalOptions.Option url={'/agents/1'} isActive={true} icon={Eye}>
          Ver colaborador
        </ModalOptions.Option>
        <ModalOptions.Option url={'/agents/1'} isActive={false} icon={Trash}>
          Excluir
        </ModalOptions.Option>
      </ModalOptions>
    )
    const modal = screen.getByTestId('modal-options')
    const modalBackground = screen.getByTestId('modal-options-background')

    expect(modal).toBeInTheDocument()
    expect(modalBackground).toBeInTheDocument()

    expect(modal).toHaveClass('css-c3qutb')
    expect(modalBackground).toHaveClass('css-1j6zrpp')
    
  })
  it('renders the modal options closed', () => {
    render(
      <ModalOptions isOpen={false} closeFn={jest.fn()}>
        <ModalOptions.Option url={'/agents/1'} isActive={true} icon={Eye}>
          Ver colaborador
        </ModalOptions.Option>
        <ModalOptions.Option url={'/agents/1'} isActive={false} icon={Trash}>
          Excluir
        </ModalOptions.Option>
      </ModalOptions>
    )
    const modal = screen.getByTestId('modal-options')
    const modalBackground = screen.getByTestId('modal-options-background')

    expect(modal).toBeInTheDocument()
    expect(modalBackground).toBeInTheDocument()

    expect(modal).toHaveClass('css-5586up')
    expect(modalBackground).toHaveClass('css-arsnmj')
    
  })
})
