import styled from 'styled-components'
import { FiEdit3, FiTrash2, FiCheckCircle } from 'react-icons/fi'

export const Li = styled.li`
  width: 350px;
  min-height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme: { spacing } }) => spacing(2)}px;
  padding: ${({ theme: { spacing } }) => `${spacing(2)}px ${spacing(4)}px`};
  border-radius: ${({ theme: { spacing } }) => spacing(4)}px;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme: { shadows } }) => shadows.shadow1};
`

export const LeftContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const RightContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const CheckIcon = styled(FiCheckCircle)<{ checked: boolean }>`
  min-width: 24px;
  min-height: 24px;
  margin-right: ${({ theme: { spacing } }) => spacing(2)}px;
  color: ${({ checked, theme: { colors } }) =>
    checked ? colors.green1 : colors.gray1};
`

export const TrashIcon = styled(FiTrash2)`
  min-width: 24px;
  min-height: 24px;
  margin-left: ${({ theme: { spacing } }) => spacing(2)}px;
  color: ${({ theme: { colors } }) => colors.gray2};
`

export const EditIcon = styled(FiEdit3)`
  min-width: 24px;
  min-height: 24px;
  margin-left: ${({ theme: { spacing } }) => spacing(2)}px;
  color: ${({ theme: { colors } }) => colors.gray2};
`
