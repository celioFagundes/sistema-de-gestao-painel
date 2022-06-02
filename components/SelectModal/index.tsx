import Link from 'next/link'
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
  Container,
  ModalBackground,
} from './styles'

type Props = {
  closeFn: () => void
  openFn: () => void
  label: string
  isOpen: boolean
}

const SelectModal = (props: Props) => {
  return (
    <Wrapper>
      <Container onClick={props.openFn}>
        <Label data-testid='label'>{props.label}</Label>
        <Icon>
          <MoreVertical />
        </Icon>
      </Container>
      <>
        <ModalBackground
          isOpen={props.isOpen}
          onClick={props.closeFn}
          data-testid='modal-background'
        />
        <Modal isOpen={props.isOpen} data-testid='modal'>
          <ModalHeader>
            <ModalLabel>Categorias</ModalLabel>
            <Icon onClick={props.closeFn} data-testid='close-modal-x'>
              <CloseX />
            </Icon>
          </ModalHeader>
          <Link href='/agents'>
            <ModalOption onClick={props.closeFn}>Colaboradores</ModalOption>
          </Link>
          <Link href='/roles'>
            <ModalOption onClick={props.closeFn}>Cargos</ModalOption>
          </Link>
        </Modal>
      </>
    </Wrapper>
  )
}

export default SelectModal
