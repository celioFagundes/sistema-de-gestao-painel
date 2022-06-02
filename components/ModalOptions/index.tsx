import Link from 'next/link'
import React from 'react'
import { ModalBackground, ModalMenu, ModalOption, ModalOptionIcon, ModalOptionLink } from './styles'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  closeFn?: () => void
  
}

interface Options {
  children: React.ReactNode
  url: string
  icon: React.FC
  isActive: boolean
  
}
const ModalOptions = (props: Props) => {
  return (
    <>
      <ModalBackground isOpen={props.isOpen} onClick={props.closeFn} data-testid='modal-options-background'/>
      <ModalMenu  isOpen={props.isOpen}  data-testid='modal-options'>{props.children}</ModalMenu>
    </>
  )
}

const Option = (props: Options) => {
  return (
    <Link href={props.url}>
      <ModalOption isActive = {props.isActive}>
        <ModalOptionIcon>
          <props.icon/>
        </ModalOptionIcon>
        <ModalOptionLink isActive={props.isActive}>{props.children}</ModalOptionLink>
      </ModalOption>
    </Link>
  )
}

ModalOptions.Option = Option
export default ModalOptions
