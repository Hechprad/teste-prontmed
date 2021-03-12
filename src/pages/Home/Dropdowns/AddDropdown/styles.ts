import styled from 'styled-components'
import { FiPlusCircle } from 'react-icons/fi'

import {
  Button as ButtonCmp,
  Loading as LoadingCmp,
  Text as TextCmp,
} from 'components'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const Title = styled(TextCmp)`
  padding: ${({ theme: { spacing } }) => spacing(2)}px;
`
export const Loading = styled(LoadingCmp)`
  margin-bottom: ${({ theme: { spacing } }) => spacing(2)}px;
`

export const Button = styled(ButtonCmp)<{ tryAgain?: boolean }>`
  width: ${({ tryAgain }) => (tryAgain ? '100px' : '54px')};
  height: 54px;
  margin: ${({ theme: { spacing } }) => spacing(2)}px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.white};
`

export const AddTodoIcon = styled(FiPlusCircle)`
  min-width: 24px;
  min-height: 24px;
  color: ${({ theme: { colors } }) => colors.white};
`
