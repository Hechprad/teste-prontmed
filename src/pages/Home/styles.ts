import styled from 'styled-components'

import { Text as TextCmp } from 'components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled(TextCmp)`
  padding: ${({ theme: { spacing } }) => spacing(2)}px;
`
