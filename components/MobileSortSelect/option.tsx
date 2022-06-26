import { CheckToggle, Name, Order, OrderLabel, OrdersContainer, Wrapper } from './styles-option'

type OptionProps = {
  value: string
  children: React.ReactNode
  selectedField: string
  selectedCriteria: string
  applySortFn: (field: string, criteria: string) => void
}

const Option = (props: OptionProps) => {
  return (
    <Wrapper>
      <Name>{props.children}</Name>
      <OrdersContainer>
        <Order>
          <CheckToggle
            onClick={() => props.applySortFn(props.value, 'asc')}
            isChecked={props.selectedField === props.value && props.selectedCriteria === 'asc'}
          />
          <OrderLabel>A - Z</OrderLabel>
        </Order>
        <Order>
          <CheckToggle
            onClick={() => props.applySortFn(props.value, 'desc')}
            isChecked={props.selectedField === props.value && props.selectedCriteria === 'desc'}
          />
          <OrderLabel>Z - A</OrderLabel>
        </Order>
      </OrdersContainer>
    </Wrapper>
  )
}

export default Option
