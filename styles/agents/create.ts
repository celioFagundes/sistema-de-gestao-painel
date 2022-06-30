import styled from '@emotion/styled'

export const Content = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  padding: 40px 24px;
  margin-top: 24px;
`
export const PageTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius:50%;
  background: linear-gradient(0deg, #eaefed, #eaefed);
`

export const SectionOrganizationalData = styled.section`
  padding: 24px;
  border: 2px solid #eaefed;
  border-radius: 8px;
  margin: 40px 0;
`
export const SelectsContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
`

export const SelectsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 24px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const SelectContainer = styled.div`
  position: relative;
`

export const InputsWrapper = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const PhonesSection = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  gap:20px;
`;
export const PhoneInputsWrapper = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  gap:20px;
`;

