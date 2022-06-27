import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'
import {CloseX }from '../Icons/'
import Option from './option'
import {
  Wrapper,
  Toggle,
  Label,
  Icon,
  ModalHeader,
  ModalLabel,
  Modal,
  ModalBackground,
} from './styles'

type OptionProps = {
  name: string
  value: string
}
type Props = {
  closeFn: () => void
  openFn: () => void
  isOpen: boolean
  options: OptionProps[]
  applySortFn: (field: string, criteria: string) => void
  selectedField: string
  selectedCriteria: string
}


const SortSelect = (props: Props) => {
  let currentField = props.options.filter(opt => {
    if(opt.value === props.selectedField)
      return opt.name
  })
  return (
    <Wrapper>
      <Toggle onClick={props.openFn}>
        {
          props.selectedField === '_id' &&
          <Label data-testid='modal-mobile-sort-label'>Ordenar por:</Label>
        }
        {
          props.selectedField !== '_id' &&
          <Label data-testid='modal-mobile-sort-label'>Ordenando por: {currentField[0].name}</Label>
        }
        
        <Icon>
          {props.selectedCriteria === 'asc' 
          ?  <AiOutlineSortAscending size = {22}/>
          : <AiOutlineSortDescending size = {22}/>}
          
        </Icon>
      </Toggle>
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
          {props.options.map(opt => (
            <Option
              key={opt.name}
              name={opt.name}
              value={opt.value}
              applySortFn={props.applySortFn}
              selectedCriteria={props.selectedCriteria}
              selectedField={props.selectedField}
            />
          ))}
        </Modal>
      </>
    </Wrapper>
  )
}

export default SortSelect
