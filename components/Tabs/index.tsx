import Link from 'next/link'
import React from 'react'
import { Container, TabLink } from './styles'

interface ContainerProps {
  children: React.ReactNode
}
interface TabProps {
  url: string
  children: React.ReactNode
  isActive: boolean
}

const Tabs = (props: ContainerProps) => {
  return <Container>{props.children}</Container>
}
const Tab: React.FC<TabProps> = ({ url, children, isActive }) => {
  return (
    <Link href={url}>
      <TabLink isActive={isActive} data-testid='tab'>{children}</TabLink>
    </Link>
  )
}

Tabs.Tab = Tab

export default Tabs
