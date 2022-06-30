import { render, screen } from '@testing-library/react'
import Card from './index'
import Phone from '../Icons/Phone'


describe('Card', () => {
  it('renders the card with the properties', () => {
    render(
      <Card Icon={Phone} dataTitle ='Telefone' data={'+55 (11) 9 123456789'}/>
    )
    const phoneIcon=  screen.getByTestId('phone-icon')
    const dataTitle = screen.getByText('Telefone')
    const data = screen.getByText('+55 (11) 9 123456789')
    
    expect(phoneIcon).toBeInTheDocument()
    expect(dataTitle).toBeInTheDocument()
    expect(data).toBeInTheDocument()
    
  })
})
