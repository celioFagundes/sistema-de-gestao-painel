import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70px 70px 50%;
  gap: 10px;
  @media(max-width:768px){
    grid-template-columns: 20% 20% 1fr;
  }
`
export const InputContainer = styled.div`
  position: relative;
`
export const Label = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  top: -12px;
  left: 15px;
  padding: 0 5px;
  background-color: #fff;
  color: #a3b8b0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  @media(max-width:500px){
    left: 10px;
  }
  @media(max-width:350px){
    left: 5px;
  }
`

export const BaseInput = styled.input`
  text-align: center;
  width: 100%;
  padding: 10px;
  color: #587169;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  outline: none;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  ::placeholder {
    color: #a3b8b0;
  }
  @media(max-width:768px){
    text-align: left;
  }
`
export const DDI = styled(BaseInput)``
export const DDD = styled(BaseInput)``
export const Number = styled(BaseInput)`
  text-align:left;
`
