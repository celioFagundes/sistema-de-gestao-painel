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
export const Row = styled.div`
  display: grid;
  grid-template-columns: 0.5fr;
  grid-gap: 24px;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`


