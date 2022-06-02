import { Container, Message, Option, Select, Wrapper } from './styles'

type Props = {}

const PaginationSelect = (props: Props) => {
  return (
    <Wrapper>
      <Message>Mostrando 10 de 50 registros</Message>
      <Container htmlFor='pagination-select'>
        <Select
          id='pagination-select'
          placeholder='Selecionar quantidade de registros a mostrar'
          data-testid='pagination-select'
        >
          <Option data-testid='pagination-select-option'>5</Option>
          <Option data-testid='pagination-select-option'>10</Option>
          <Option data-testid='pagination-select-option'>20</Option>
          <Option data-testid='pagination-select-option'>40</Option>
          <Option data-testid='pagination-select-option'>50</Option>
        </Select>
      </Container>
    </Wrapper>
  )
}

export default PaginationSelect
