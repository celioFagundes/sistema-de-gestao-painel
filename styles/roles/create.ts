import styled from '@emotion/styled'

type IsActive = {
  isActive: boolean
}

export const Content = styled.div`
  padding: 40px 24px;
  margin-top: 24px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  
`
export const PageTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const SelectsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Checkbox = styled.div<IsActive>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  background: ${props => (props.isActive ? '#1DD195' : '#fff')};
  color: #fff;
  border: ${props => (props.isActive ? '0' : '2px solid #CAD6D1')};
  border-radius: 6px;
`
