import styled from "@emotion/styled";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width:max-content;
  padding: 10px 25px;
  margin-right: 16px;
  margin-bottom:15px;
  background: #f5faf8;
  border-radius: 8px;
  font-size:14px;
  font-weight:bold;
  color: #587169;
  border: 2px solid #cad6d1;
  transition: all 100ms ease-in-out;
  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width:100%;
  }
`