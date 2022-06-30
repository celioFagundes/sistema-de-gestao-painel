import styled from '@emotion/styled'
import { BoldText, LightText } from '../../../styles/texts'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  background-color: #f5faf8;
  color: #587169;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  outline: none;
  cursor: pointer;
`
export const Label = styled.label`
  position: absolute;
  top: -10px;
  left: 18px;
  padding: 0 5px;
  color: #a3b8b0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  z-index: 4000;
  ::before {
    content: ' ';
    position: absolute;
    top: 2px;
    left: 0px;
    display: block;
    height: 1px;
    width: 100%;
    padding: 5px 0px;
    background-color: #fff;
    z-index: -1;
  }
`
export const DataWrapper = styled.div`
  margin-right: 20px;
`
export const DataTitle = styled(LightText)`
  font-size: 12px;
`
export const Data = styled(BoldText)`
  font-size: 14px;
  width: max-content;
`
