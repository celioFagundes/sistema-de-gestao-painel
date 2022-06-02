import styled from '@emotion/styled'

type StatusProps = {
  status?: string
}

export const Content = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  padding: 40px 24px;
  margin-top: 24px;
`

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

export const PageTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const Name = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  margin-left: 8px;

 
`
export const Status = styled.div<StatusProps>`
  font-weight: 500;
  font-size: 14px;
  padding: 4px 16px;
  border-radius: 80px;
  background-color: ${props => (props.status === 'inactive' ? '#EAEFED' : '#B5F1DD')};
  color: ${props => (props.status === 'inactive' ? '#A3B8B0' : '#34423D')};
`
export const AvatarNameContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
export const ImageWrapper = styled.div`
  position: relative;
  min-height: 32px;
  min-width: 32px;
  border-radius:50%;
  background: linear-gradient(0deg, #eaefed, #eaefed);
`
