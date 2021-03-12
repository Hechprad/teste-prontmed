import styled from 'styled-components'

import { Loading as LoadingCmp, Text as TextCmp } from 'components'

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

  & > button {
    background-color: ${({ theme: { colors } }) => colors.red};
  }

  & > p {
    margin-bottom: ${({ theme: { spacing } }) => spacing(3)}px;
  }
`

export const Loading = styled(LoadingCmp)`
  min-width: 72px;
  height: calc(100vh - 180px);
`
