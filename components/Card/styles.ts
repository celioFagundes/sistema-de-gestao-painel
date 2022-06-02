import styled from '@emotion/styled'
import { BoldText, LightText } from '../../styles/texts'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-right: 24px;
  padding: 16px;
  background: #f5faf8;
  border: 2px solid #cad6d1;
  border-radius: 8px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  margin-right: 8px;
  background: #cad6d1;
  color: #465953;
  border-radius: 50%;
`
export const DataWrapper = styled.div``
export const DataTitle = styled(LightText)`
  font-size: 12px;
`
export const Data = styled(BoldText)`
  font-size: 14px;
  width: max-content;
`
