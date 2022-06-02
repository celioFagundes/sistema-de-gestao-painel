import styled from '@emotion/styled'
import { BoldText, LightText } from '../../styles/texts'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`
export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 61px;
  width: 100%;
  padding: 0 32px;
  background-color: #fff;
  border-bottom: 1px solid #eaefed;
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    padding: 0;
    border-width: 2px;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-right: 32px;
  border-right: 1px solid #eaefed;
  @media (max-width: 768px) {
    margin: 0 auto;
    padding-right: 0px;
    border: 0;
  }
`
export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 32px;
  border-left: 1px solid #eaefed;
  @media (max-width: 768px) {
    position: absolute;
    left: 0px;
    top: 16px;
    padding-right: 0px;
    padding-left: 16px;
    border: 0;
  }
`
export const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: #b5f1dd;
  padding: 8px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 400;
`
export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-left: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`
export const Username = styled(BoldText)`
  font-size: 14px;
`
export const Data = styled(LightText)`
  width: 100%;
  font-size: 12px;
`
export const Main = styled.section`
  display: grid;
  grid-template-columns: 15% 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  background-color: #fff;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }
`
export const Sidebar = styled.aside`
  display: block;
  height: 100%;
  width: 100%;
  max-width: 300px;
  border-right: 1px solid #fff;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  @media (max-width: 768px) {
    display: none;
  }
`
export const Container = styled.section`
  padding: 50px;
  width: 100%;
  background-color: #f8faf9;
  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`
export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: -1;
  max-width: 980px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

export const MainContainer = styled.div`
  width: 100%;
`