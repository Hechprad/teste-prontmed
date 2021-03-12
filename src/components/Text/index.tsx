import React from 'react'

import TextStyle from './styles'
import * as t from './types'

/**
 * Text React Component
 *
 * @component
 * @example
 *
 * import { Text } from 'components'
 *
 * const Component: React.FC = () => (
 *   <Text type="subtitle" color="blue">
 *    Text example
 *   </Text>
 * )
 *
 * @param   {string} [type] Font type => 'body' | 'heading' | 'subtitle'
 * @param   {string} [color] Color name => 'black' | 'blue'| 'gray1'| 'gray2'| 'green'| 'red'| 'white'
 * @param   {string} [textAlign] Align type => 'left' | 'center' | 'right' | 'unset'
 * @returns {React.FC} React Component
 */

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
