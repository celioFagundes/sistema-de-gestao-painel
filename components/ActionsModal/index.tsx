import Link from 'next/link'
import React from 'react'
import { FilePlus } from '../Icons'
import {
  ModalBackground,
  Content,
  ActionContainer,
  ActionIcon,
  ActionLink,
  ToggleWrapper,
  ToggleLabel,
} from './styles'

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
const ActionsModal = (props: Props) => {
  return (
    <>
      <ModalBackground
        isOpen={props.isOpen}
        onClick={props.closeFn}
        data-testid='modal-options-background'
      />
      <Content isOpen={props.isOpen} data-testid='modal-options'>
        {props.children}
      </Content>
    </>
  )
}

const Action = (props: Options) => {
  return (
    <Link href={props.url}>
      <ActionContainer isActive={props.isActive}>
        <ActionIcon>
          <props.icon />
        </ActionIcon>
        <ActionLink isActive={props.isActive}>{props.children}</ActionLink>
      </ActionContainer>
    </Link>
  )
}

type ActionsToggle = {
  onClick: () => void
}
const MobileActionsToggle = (props: ActionsToggle) => {
  return (
    <ToggleWrapper onClick={props.onClick}>
      <FilePlus />
      <ToggleLabel>Ações</ToggleLabel>
    </ToggleWrapper>
  )
}
export default ActionsModal
export { Action, MobileActionsToggle }
