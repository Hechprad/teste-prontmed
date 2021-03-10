import React from 'react'

import * as t from './types'
import TextStyle from './styles'

const htmlTag: {
  [key: string]: 'h1' | 'p'
} = {
  heading: 'h1',
  subtitle: 'p',
  body: 'p',
}

const Text: React.FC<t.TextProps> = ({
  type = 'body1',
  bold = false,
  color = 'black',
  children,
  textAlign = 'unset',
  ...rest
}) => (
  <TextStyle
    type={type}
    bold={bold}
    color={color}
    textAlign={textAlign}
    as={htmlTag[type]}
    {...rest}
  >
    {children}
  </TextStyle>
)

export default Text
