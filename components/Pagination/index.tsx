import Left from '../Icons/Left'
import Refresh from '../Icons/Refresh'
import Right from '../Icons/Right'
import {
  MobilePagination,
  MobilePaginationLabel,
  PaginationButton,
  PaginationLabel,
  Wrapper,
} from './styles'

type Props = {}

const Pagination = (props: Props) => {
  return (
    <Wrapper>
      <PaginationButton isDisabled={true} role ='previous-page'>
        <Left />
      </PaginationButton>
      <PaginationLabel>1 de 10</PaginationLabel>
      <PaginationButton isDisabled={false} role ='next-page'>
        <Right />
      </PaginationButton>
      <MobilePagination>
        <Refresh />
        <MobilePaginationLabel role ='load-more'>Carregar mais</MobilePaginationLabel>
      </MobilePagination>
    </Wrapper>
  )
}

export default Pagination
