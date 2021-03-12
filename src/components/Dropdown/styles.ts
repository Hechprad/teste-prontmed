import styled, { css } from 'styled-components'

import * as t from './types'

export const DropdownWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
`

export const DropdownOverlay = styled.div<t.IsOpen>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(39, 39, 39, 0.63);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  bottom: 0;
  transition: all ease 0.3s;
`

export const DropdownContent = styled.div<t.DropdownContent>`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ size, isOpen }) => {
    switch (size) {
      case 'sm':
        return css`
          height: ${isOpen ? '276px' : '0'};
        `
      case 'lg':
        return css`
          height: ${isOpen ? '323px' : '0'};
        `
      default:
        return css`
          height: ${isOpen ? '276px' : '0'};
        `
    }
  }}

  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: ${({ theme: { spacing } }) =>
    `${spacing(3)}px ${spacing(3)}px 0 0`};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  padding-top: ${({ theme: { spacing } }) => spacing(3)}px;
  overflow: hidden;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  bottom: 0;
  transition: all ease 0.5s;
`

export const DropdownChildren = styled.div`
  height: 100%;
  overflow: none;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
