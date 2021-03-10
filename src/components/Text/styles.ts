import styled from 'styled-components'
import { TextProps } from './types'

const TextStyle = styled.p<TextProps>`
  color: ${({ color, theme: { colors } }) => colors[color ?? 'black']};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ bold }) => (bold ? 'normal' : '300')};

  ${({ theme: { fontTypes }, type }) =>
    fontTypes[type ?? 'body1'] || fontTypes.body1}
`

export default TextStyle
