import Link from 'next/link'
import { CloseX, MoreVertical } from '../../Icons'
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
} from './styles'

type Props = {
  closeFn: () => void
  openFn: () => void
  currentPage: string
  isOpen: boolean
}

const NavigationSelect = (props: Props) => {
  return (
    <Wrapper>
      <ToggleContainer onClick={props.openFn}>
        <Label data-testid='label'>{props.currentPage}</Label>
        <Icon>
          <MoreVertical />
        </Icon>
      </ToggleContainer>
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
          <Link href='/organization/agents'>
            <ModalOption onClick={props.closeFn}>Colaboradores</ModalOption>
          </Link>
          <Link href='/organization/roles'>
            <ModalOption onClick={props.closeFn}>Cargos</ModalOption>
          </Link>
          <Link href='/organization/departments'>
            <ModalOption onClick={props.closeFn}>Departamentos</ModalOption>
          </Link>
        </Modal>
      </>
    </Wrapper>
  )
}

export { NavigationSelect}
