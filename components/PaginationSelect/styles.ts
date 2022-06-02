import styled from '@emotion/styled'
import { LightText } from '../../styles/texts'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`
export const Message = styled(LightText)`
  margin-right: 24px;
`

export const Container = styled.label`
  position: relative;
`
export const Select = styled.select`
  padding: 6px 40px 6px 15px;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right;
  background-position-x: 90%;
  background-position-y: 10px;
  color: #587169;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  
  &:hover {
    cursor: pointer;
    border-color: #000;
  }
`
export const Option = styled.option``
