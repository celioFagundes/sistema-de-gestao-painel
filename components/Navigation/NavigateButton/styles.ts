import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:max-content;
  padding: 4px 15px;
  margin-right: 16px;
  margin-bottom:15px;
  background: #f5faf8;
  border-radius: 8px;
  color: #587169;
  border: 2px solid #cad6d1;
  transition: all 100ms ease-in-out;
  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
`
export const Label = styled.p`
font-size:14px;
  margin-left:15px;
`;