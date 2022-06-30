import Link from 'next/link'
import React from 'react'
import { AiOutlineTransaction } from 'react-icons/ai'
import { FilePlus } from '../Icons'
import {
  ModalBackground,
  Content,
  ActionContainer,
  ActionIcon,
  Action,
  ToggleWrapper,
  ToggleLabel,
} from './styles'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  closeFn?: () => void
}

interface LinkOptions {
  children: React.ReactNode
  url: string
  icon: React.FC
  isActive: boolean
}
interface ButtonOptions {
  children: React.ReactNode
  onClick: () => void
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

const ActionLink = (props: LinkOptions) => {
  return (
    <Link href={props.url}>
      <ActionContainer isActive={props.isActive}>
        <ActionIcon>
          <props.icon />
        </ActionIcon>
        <Action isActive={props.isActive}>{props.children}</Action>
      </ActionContainer>
    </Link>
  )
}
const ActionButton = (props: ButtonOptions) => {
  const handleOnClick = () =>{
    if(props.isActive){
      props.onClick()
    }
  }
  return (
      <ActionContainer isActive={props.isActive} onClick = {handleOnClick}>
        <ActionIcon>
          <props.icon />
        </ActionIcon>
        <Action isActive={props.isActive}>{props.children}</Action>
      </ActionContainer>
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

export { ActionsModal, ActionLink,ActionButton, MobileActionsToggle }
