import Link from 'next/link'
import { ItemIcon, ItemText, NavContainer, NavItem, NavList, Wrapper } from './styles'
import { MdOutlineDataExploration, MdOutlineSell } from 'react-icons/md'
import { TbPackage, TbZoomMoney } from 'react-icons/tb'
import { GiOrganigram } from 'react-icons/gi'
const Sidebar = () => {
  return (
    <Wrapper>
      <NavContainer>
        <NavList>
          <Link href='/agents'>
            <NavItem>
              <ItemIcon>
                <MdOutlineDataExploration />
              </ItemIcon>
              <ItemText>Dados gerais</ItemText>
            </NavItem>
          </Link>
          <Link href='/agents'>
            <NavItem>
              <ItemIcon>
                <TbZoomMoney />
              </ItemIcon>
              <ItemText>Finanças</ItemText>
            </NavItem>
          </Link>
          <Link href='/agents'>
            <NavItem>
              <ItemIcon>
                <TbPackage />
              </ItemIcon>
              <ItemText>Pedidos</ItemText>
            </NavItem>
          </Link>
          <Link href='/agents'>
            <NavItem>
              <ItemIcon>
                <MdOutlineSell />
              </ItemIcon>
              <ItemText>Promoções</ItemText>
            </NavItem>
          </Link>
          <Link href='/agents'>
            <NavItem>
              <ItemIcon>
                <GiOrganigram />
              </ItemIcon>
              <ItemText>Organização</ItemText>
            </NavItem>
          </Link>
        </NavList>
      </NavContainer>
    </Wrapper>
  )
}

export { Sidebar }
