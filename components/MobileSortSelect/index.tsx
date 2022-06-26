import CloseX from '../Icons/CloseX'
import MoreVertical from '../Icons/MoreVertical'
import Option from './option'
import {
  Wrapper,
  Label,
  Icon,
  ModalHeader,
  ModalLabel,
  Modal,
  ToggleContainer,
  ModalBackground,
} from './styles'

type Props = {
  closeFn: () => void
  openFn: () => void
  isOpen: boolean
  children: React.ReactNode
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

MobileSortSelect.Option = Option
export default MobileSortSelect
