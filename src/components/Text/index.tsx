import React from 'react'

import TextStyle from './styles'
import * as t from './types'

const htmlTag: {
  [key: string]: 'h1' | 'p'
} = {
  heading: 'h1',
  subtitle: 'p',
  body: 'p',
}

const Text: React.FC<t.TextProps> = ({
  type = 'body',
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
