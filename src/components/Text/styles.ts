import styled from 'styled-components'
import { TextStyleProps } from './types'

const TextStyle = styled.p<TextStyleProps>`
  color: ${({ color, theme: { colors } }) => colors[color]};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ bold }) => (bold ? 'normal' : '300')};

  ${({ theme: { fontTypes }, type }) => fontTypes[type]}
`

export default TextStyle
