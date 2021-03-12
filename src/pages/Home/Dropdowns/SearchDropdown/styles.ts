import styled, { css } from 'styled-components'

import {
  Button as ButtonCmp,
  Text as TextCmp,
  TextInput as TextInputCmp,
} from 'components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled(TextCmp)`
  padding: ${({ theme: { spacing } }) => spacing(2)}px;
`

export const TextInput = styled(TextInputCmp)`
  width: 150px;
`

export const Button = styled(ButtonCmp)`
  width: 80px;
  height: 54px;
  margin: ${({ theme: { spacing } }) => spacing(2)}px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.white};

  ${({ theme: { colors }, disabled }) =>
    disabled &&
    css`
      background-color: ${colors.gray2};
      cursor: not-allowed;
    `};
`
