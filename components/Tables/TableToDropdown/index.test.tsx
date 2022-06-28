import { render, screen } from '@testing-library/react'
import TableDrop from './index'
import { matchers } from '@emotion/jest'
expect.extend(matchers)
describe('TableDrop', () => {
  it('renders the table drop', () => {
    render(
      <TableDrop>
        <TableDrop.Header>
          <TableDrop.Row numberOfColumns={5}>
            <TableDrop.Th gridSpan>Nome Completo</TableDrop.Th>
            <TableDrop.Th>Departamento</TableDrop.Th>
          </TableDrop.Row>
        </TableDrop.Header>
        <TableDrop.Body>
          <TableDrop.Row numberOfColumns={6} isActive={true} status={'active'} maxHeight={'95px'}>
            <TableDrop.Td gridSpan></TableDrop.Td>
          </TableDrop.Row>
          <TableDrop.Row
            numberOfColumns={7}
            isActive={false}
            status={'inactive'}
            maxHeight={'70px'}
          >
            <TableDrop.Td></TableDrop.Td>
          </TableDrop.Row>
        </TableDrop.Body>
      </TableDrop>
    )
    const tableHeader = screen.getByTestId('tabledrop-header')
    const rows: HTMLElement[] = screen.getAllByTestId('tabledrop-row')
    const ths: HTMLElement[] = screen.getAllByTestId('tabledrop-th')
    const tds: HTMLElement[] = screen.getAllByTestId('tabledrop-td')

    expect(tableHeader).toHaveStyleRule('display', 'none', {
      media: '(max-width: 768px)',
    })

    expect(rows[0]).toHaveStyleRule('grid-template-columns', 'repeat(5, 1fr)')

    expect(rows[1]).toHaveStyleRule('grid-template-columns', 'repeat(6, 1fr)')
    expect(rows[1]).toHaveStyleRule('color', '#587169')
    expect(rows[1]).toHaveStyleRule('max-height', '1000px', {
      media: '(max-width: 768px)',
    })
    expect(rows[1]).toHaveStyleRule('border-color', '#B5F1DD', {
      media: '(max-width: 768px)',
    })

    expect(rows[2]).toHaveStyleRule('grid-template-columns', 'repeat(7, 1fr)')
    expect(rows[2]).toHaveStyleRule('color', '#A3B8B0')
    expect(rows[2]).toHaveStyleRule('max-height', '70px', {
      media: '(max-width: 768px)',
    })
    expect(rows[2]).not.toHaveStyleRule('border-color', '#B5F1DD', {
      media: '(max-width: 768px)',
    })

    expect(ths[0]).toHaveStyleRule('grid-column', 'span 2', {target: 'first-of-type'})
    expect(ths[1]).not.toHaveStyleRule('grid-column', 'span 2')

    expect(tds[0]).toHaveStyleRule('grid-column', 'span 2', {target: 'first-of-type'})
    expect(tds[1]).not.toHaveStyleRule('grid-column', 'span 2')
  })
})
