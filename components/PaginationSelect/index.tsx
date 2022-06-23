import { Container, Message, Option, Select, Wrapper } from './styles'

type Props = {
  limit: number
  totalDocs: number
  onChange: (value: number) => void
}
let selectOptions = [10, 20, 30, 40, 50]
const PaginationSelect = (props: Props) => {
  return (
    <Wrapper>
      <Message>
        Total : {props.totalDocs} registros | Exibir {props.limit} por página
      </Message>
      <Container htmlFor='pagination-select'>
        <Select
          id='pagination-select'
          placeholder='Selecionar quantidade de registros a mostrar'
          data-testid='pagination-select'
          value={props.limit}
          onChange={evt => props.onChange(Number(evt.target.value))}
        >
          {selectOptions[0] <= props.totalDocs ? (
            selectOptions.map(opt => (
              <Option key={opt} value={opt} data-testid='pagination-select-option'>
                {opt}
              </Option>
            ))
          ) : (
            <Option value={10} data-testid='pagination-select-option'>
              10
            </Option>
          )}
        </Select>
      </Container>
    </Wrapper>
  )
}

export default PaginationSelect
