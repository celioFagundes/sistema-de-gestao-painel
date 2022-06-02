import { render, screen } from '@testing-library/react'
import Tabs from './index'
import { matchers } from '@emotion/jest'
expect.extend(matchers)

describe('Tabs', () => {
  it('renders the tabs with the correct styles', () => {
    render(
      <Tabs >
        <Tabs.Tab url = {'/agents'} isActive = {true}>Colaboradores</Tabs.Tab>
        <Tabs.Tab url = {'/roles'} isActive = {false}>Roles</Tabs.Tab>
      </Tabs>
    )
    const tabs: HTMLElement[] = screen.getAllByTestId('tab')

    expect(tabs[0]).toHaveStyleRule('color', '#34423D')
    expect(tabs[0]).toHaveStyleRule('border-color', '#22e0a1')
    
    expect(tabs[1]).toHaveStyleRule('color', '#A3B8B0')
    expect(tabs[1]).toHaveStyleRule('border-color', 'transparent')
  })
})
