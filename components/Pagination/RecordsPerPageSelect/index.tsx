import { Container, Message, Option, Select, Wrapper } from './styles'

type Props = {
  limit: number
  totalDocs: number
  onChange: (value: number) => void
}
let selectOptions = [10, 20, 30, 40, 50]
const RecordsPerPageSelect = (props: Props) => {
  return (
    <Wrapper>
      <Message>
        Total : {props.totalDocs} | Exibir {props.limit}
      </Message>
      <Container htmlFor='pagination-select'>
        <Select
          id='pagination-select'
          placeholder='Selecionar quantidade de registros a mostrar'
          data-testid='pagination-select'
          value={props.limit}
          onChange={evt => props.onChange(Number(evt.target.value))}
        >
          {selectOptions.map(opt => (
            <Option key={opt} value={opt} data-testid='pagination-select-option'>
              {opt}
            </Option>
          ))}
        </Select>
      </Container>
    </Wrapper>
  )
}

export { RecordsPerPageSelect }
