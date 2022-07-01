import styled from '@emotion/styled'
import { BoldText } from '../../../styles/texts'

export const Wrapper = styled.div`
  margin: 10px 0;
`
export const Container = styled.div`
  position: relative;
  display: flex;
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
  justify-content: flex-start;
  align-items: center;
  margin-top: 3px;
`
export const ErrorIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #fbaf00;
  margin-right: 5px;
`
export const ErrorMessage = styled(BoldText)`
  font-size: 12px;
  color: #fbaf00;
`
export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 11px 5px;
  background: transparent;
  font-size: 14px;
  font-weight: bold;
  color: #587169;
  border: 0;
  border-left: 2px solid #cad6d1;
  transition: all 100ms ease-in-out;
  &:hover{
    cursor: pointer;
  }
  &:hover svg >path {
    fill: #E85D75;
  }   
`
