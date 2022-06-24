import styled from "@emotion/styled"

type SelectProps = {
  bgColor?: string
}
export const Wrapper = styled.div`
  position: relative;
  width:100%;
`
export const ToggleSelect = styled.div`
  position: relative;
  display:flex;
  justify-content: flex-start;
  align-items:center;
  width:100%;
`
export const Label = styled.button`
  background-color: transparent;
  border:0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-right:5px;
`
export const Selection = styled.div<SelectProps>`
  width: 100%;
  padding: 20px;
  background-color: ${props => props.bgColor ? props.bgColor : '#fff'};
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
export const OptionLabel = styled.option``
