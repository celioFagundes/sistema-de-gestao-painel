import {   render, screen } from '@testing-library/react'
import Pagination from './index'

describe('Pagination', () => {
  it('renders the pagination', () => {
    render(<Pagination />)
    const label = screen.getByText('1 de 10')
    const prevButton = screen.getByRole('previous-page')
    const nextButton = screen.getByRole('next-page')
    const loadMoreButton = screen.getByRole('load-more')
    const prevIcon = screen.getByRole('left-icon')
    const nextIcon = screen.getByRole('right-icon')
    const refreshIcon = screen.getByRole('refresh-icon')

    expect(label).toBeInTheDocument()

    expect(prevButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
    expect(loadMoreButton).toBeInTheDocument()

    expect(prevIcon).toBeInTheDocument()
    expect(nextIcon).toBeInTheDocument()
    expect(refreshIcon).toBeInTheDocument()
    
  })
})
