import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { MdOutlineDataExploration, MdOutlineSell } from 'react-icons/md'
import { TbPackage, TbZoomMoney } from 'react-icons/tb'
import { GiOrganigram } from 'react-icons/gi'
import { Background, ItemIcon, ItemText, MenuToggle, NavContainer, NavItem, NavList, Wrapper } from './styles'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'

const areas = [
  {
    name: 'Dados gerais',
    url: '/data',
    icon: MdOutlineDataExploration,
  },
  {
    name: 'Finanças',
    url: '/finances',
    icon: TbZoomMoney,
  },
  {
    name: 'Pedidos',
    url: '/orders',
    icon: TbPackage,
  },
  {
    name: 'Promoções',
    url: '/offers',
    icon: MdOutlineSell,
  },
  {
    name: 'Organização',
    url: '/organization',
    icon: GiOrganigram,
  },
]
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const router = useRouter()
  const getCurrentPath = () => {
    const path = '/' + router.pathname.split('/')[1]
    return path
  }
  const memoizedPath = useMemo(() => getCurrentPath(), [router])

  const handleShowSidebar = () =>{
    setShowSidebar(!showSidebar)
  }
  return (
    <>
      <MenuToggle onClick={handleShowSidebar}>
        <FiMenu />
      </MenuToggle>
      <Background isShown = {showSidebar} onClick = {handleShowSidebar}/>
      <Wrapper isShown = {showSidebar}>
        <NavContainer>
          <NavList>
            {areas.map(area => (
              <Link href={area.url + '/agents'} key={area.name}>
                <NavItem isActive={area.url === memoizedPath}>
                  <ItemIcon>
                    <area.icon />
                  </ItemIcon>
                  <ItemText>{area.name}</ItemText>
                </NavItem>
              </Link>
            ))}
          </NavList>
        </NavContainer>
      </Wrapper>
    </>
  )
}

export { Sidebar }
