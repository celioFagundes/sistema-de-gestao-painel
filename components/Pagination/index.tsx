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

type Props = {
  limit: number
  totalDocs: number
  page: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
  handleNextPage: () => void
  handlePrevPage: () => void
  handleLoadMore: () => void
}

const Pagination = (props: Props) => {
  return (
    <Wrapper>
      <PaginationButton
        isDisabled={!props.hasPrev}
        role='previous-page'
        onClick={props.handlePrevPage}
      >
        <Left />
      </PaginationButton>
      <PaginationLabel>
        {props.page} de {props.totalPages}
      </PaginationLabel>
      <PaginationButton isDisabled={!props.hasNext} role='next-page' onClick={props.handleNextPage}>
        <Right />
      </PaginationButton>
      {props.limit < props.totalDocs && (
        <MobilePagination onClick={props.handleLoadMore}>
          <Refresh />
          <MobilePaginationLabel role='load-more'>Carregar mais</MobilePaginationLabel>
        </MobilePagination>
      )}
    </Wrapper>
  )
}

export default Pagination
