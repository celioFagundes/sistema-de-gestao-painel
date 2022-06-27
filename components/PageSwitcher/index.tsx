import { Left, Refresh, Right } from '../Icons'
import {
  LoadMore,
  LoadMoreLabel,
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

const PageSwitcher = (props: Props) => {
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
        <LoadMore onClick={props.handleLoadMore}>
          <Refresh />
          <LoadMoreLabel role='load-more'>Carregar mais</LoadMoreLabel>
        </LoadMore>
      )}
    </Wrapper>
  )
}

export default PageSwitcher
