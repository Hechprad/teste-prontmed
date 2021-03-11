import styled from 'styled-components'

import { FiPlusCircle, FiSearch } from 'react-icons/fi'

export const MenuContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme: { spacing } }) => spacing(2)}px;
  margin: ${({ theme: { spacing } }) => `${spacing(2)}px 0 ${spacing(2)}px 0`};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray2};
  border-top: 1px solid ${({ theme: { colors } }) => colors.gray2}; ;
`

export const Icon = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  & + & {
    margin-left: ${({ theme: { spacing } }) => spacing(2)}px;
  }
`

export const AddTodoIcon = styled(FiPlusCircle)`
  min-width: 24px;
  min-height: 24px;
  color: ${({ theme: { colors } }) => colors.blue1};
`

export const SearchTodoIcon = styled(FiSearch)`
  min-width: 24px;
  min-height: 24px;
  color: ${({ theme: { colors } }) => colors.blue1};
`
