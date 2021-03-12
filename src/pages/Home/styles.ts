import styled from 'styled-components'

import { Text as TextCmp } from 'components'
import { FiLoader } from 'react-icons/fi'

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled(TextCmp)`
  padding: ${({ theme: { spacing } }) => spacing(2)}px;
`

export const Ul = styled.ul`
  height: calc(100vh - 180px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    height: 7px;
    width: 7px;
    background-color: ${({ theme: { colors } }) => colors.gray1};
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: ${(props) => props.theme.colors.gray2};
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 180px);

  & > p {
    margin-bottom: ${({ theme: { spacing } }) => spacing(3)}px;
  }
`

export const LoadingIcon = styled(FiLoader)`
  min-width: 72px;
  height: calc(100vh - 180px);
  color: ${({ theme: { colors } }) => colors.blue1};

  animation: spin-animation 1.2s infinite;
  animation-timing-function: linear;

  @keyframes spin-animation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`
