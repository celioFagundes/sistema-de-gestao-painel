import styled from '@emotion/styled'
import { BoldText } from '../../styles/texts'

type SelectProps = {
  bgColor?: string
}
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
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

export const Selection = styled.select<SelectProps>`
  width: 100%;
  padding: 20px;
  background: url('http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png')
    no-repeat right;
  background-color: ${props => (props.bgColor ? props.bgColor : '#fff')};
  background-position-x: 90%;
  background-position-y: 25px;
  color: #587169;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  cursor: pointer;
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
export const OptionLabel = styled.option``
