import styled from "@emotion/styled";

export const BackIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 4px;
  margin-right: 16px;
  background: #eaefed;
  border-radius: 8px;
  transition: all 100ms ease-in-out;
  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    border-radius: 50%;
  } ;
`