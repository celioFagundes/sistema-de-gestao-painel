import { useState } from 'react'
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'
import CloseX from '../Icons/CloseX'
import MoreVertical from '../Icons/MoreVertical'
import {
  Wrapper,
  Label,
  ModalOption,
  Icon,
  ModalHeader,
  ModalLabel,
  Modal,
  ToggleContainer,
  ModalBackground,
  CheckOption,
  OptionLabel,
} from './styles'

type Props = {
  
  closeFn: () => void
  openFn: () => void
  isOpen: boolean
  children: React.ReactNode
}
type OptionProps = {
  value: string
  children: React.ReactNode
  selectedField: string
  selectedCriteria: string
  applySortFn: (field: string, criteria: string) => void
}
const MobileSortSelect = (props: Props) => {
  return (
    <Wrapper>
      <ToggleContainer onClick={props.openFn}>
        <Label data-testid='modal-mobile-sort-label'>Ordenar por:</Label>
        <Icon>
          <MoreVertical />
        </Icon>
      </ToggleContainer>
      <>
        <ModalBackground
          isOpen={props.isOpen}
          onClick={props.closeFn}
          data-testid='modal-mobile-sort-background'
        />
        <Modal isOpen={props.isOpen} data-testid='modal'>
          <ModalHeader>
            <ModalLabel>Ordenar por:</ModalLabel>
            <Icon onClick={props.closeFn} data-testid='close-modal-mobile-sort-x'>
              <CloseX />
            </Icon>
          </ModalHeader>
          {props.children}
        </Modal>
      </>
    </Wrapper>
  )
}

const Option = (props: OptionProps) => {
  return (
    <ModalOption>
      <OptionLabel>{props.children}</OptionLabel>
      <CheckOption
        onClick={() => props.applySortFn(props.value, 'asc')}
        isChecked={(props.selectedField === props.value && props.selectedCriteria === 'asc')}
      />
      A - Z
      <CheckOption
      onClick={() => props.applySortFn(props.value, 'desc')}
        isChecked={(props.selectedField === props.value && props.selectedCriteria === 'desc')}
      />
      Z - A
    </ModalOption>
  )
}
MobileSortSelect.Option = Option
export default MobileSortSelect
