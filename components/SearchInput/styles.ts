import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid #cad6d1;
  border-radius: 8px;
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
export const Icon = styled.div`
  position: absolute;
  top: 21px;
  left: 20px;
  color: #34423d;
`
export const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 20px;
  padding-left: 52px;
  color: #587169;
  border: none;
  border-radius: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  outline: none;
`
export const SearchResults = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:max-content;
  padding: 5px 5px 5px 15px;
  margin-top:20px;
  border-radius: 5px;
  background-color: #abe0ce;
  font-size: 14px;
`
export const ResetSearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
  padding:2px;
  transition: all 100ms;
  margin-left: 15px;
  border:0;
  border-radius: 5px;
  background-color:  #587169;
  color: #fff;
  cursor:pointer;
  &:hover{
    background-color: #000;
  }
`
