import styled from '@emotion/styled'
import { BoldText, NormalText } from '../../../styles/texts'

export const Wrapper = styled.div``
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  margin-right: 5px;
  width: 100%;
`
export const Label = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  top: -12px;
  left: 20px;
  padding: 0 5px;
  background-color: #fff;
  color: #a3b8b0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`

export const InputElement = styled.input`
  width: 100%;
  padding: 10px;
  color: #587169;
  border: none;
  border-radius: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  outline: none;
  ::placeholder {
    color: #a3b8b0;
  }
`
export const ErrorContainer = styled.div`
  display: flex;
  justify-content:flex-start;
  align-items: center;
  margin-top:3px;
`
export const ErrorIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #FBAF00;
  margin-right:5px;
`
export const ErrorMessage = styled(BoldText)`
  font-size: 12px;
  color: #FBAF00;
`
