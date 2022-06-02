import styled from '@emotion/styled'
type IsActive = {
  isActive: boolean
  maxHeight?: string
}
export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 0;
  border-bottom: 1px solid #eaefed;
  @media (max-width: 768px) {
    display: none;
  }
`
export const TabLink = styled.a<IsActive>`
  width: 200px;
  padding-bottom: 16px;
  text-align: center;
  color: ${props => (props.isActive ? '#34423D' : '#A3B8B0')};
  border-bottom: 2px solid;
  border-color: ${props => (props.isActive ? '#22e0a1' : 'transparent')};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    color: ${props => !props.isActive && '#587169'};
    border-color: ${props => !props.isActive && '#ABE0CE'};
  }
`
