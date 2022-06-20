import { Container, Message, Option, Select, Wrapper } from './styles'

type Props = {
  limit: number
  totalDocs: number
  onChange: (value:number) => void
}
let selectOptions = [5, 10, 20, 30, 40, 50]
const PaginationSelect = (props: Props) => {
  return (
    <Wrapper>
      <Message>
        Mostrando {props.limit} de {props.totalDocs} registros
      </Message>
      <Container htmlFor='pagination-select'>
        <Select
          id='pagination-select'
          placeholder='Selecionar quantidade de registros a mostrar'
          data-testid='pagination-select'
          defaultValue={props.limit}
          onChange= {(evt) => props.onChange(Number(evt.target.value))}
        >
          {selectOptions.map(opt => (
            opt <= props.totalDocs &&
            <Option
              key={opt}
              value={opt}
              data-testid='pagination-select-option'
            >
              {opt}
            </Option>
          ))}
        </Select>
      </Container>
    </Wrapper>
  )
}

export default PaginationSelect
