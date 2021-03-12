import styled, { css } from 'styled-components'

import ButtonProps from './types'

const StyledButton = styled.button<ButtonProps>`
  width: auto;
  height: 64px;
  border-radius: ${({ theme: { spacing } }) => spacing(2)}px;
  padding: ${({ theme: { spacing } }) => spacing(2)}px;

  border: none;
  background-color: ${({ theme: { colors } }) => colors.blue};

  &:hover {
    filter: brightness(95%);
  }

  &:active {
    filter: brightness(90%);
  }

  ${({ theme: { colors }, disabled }) =>
    disabled &&
    css`
      background-color: ${colors.gray2};
      cursor: not-allowed;
    `};
`

export default StyledButton
