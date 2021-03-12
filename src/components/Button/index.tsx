import React from 'react'

import Text from 'components/Text'

import StyledButton from './styles'
import ButtonProps from './types'

/**
 * Button React Component
 *
 * @component
 * @example
 *
 * import { Button } from 'components'
 *
 * const Component: React.FC = () => (
 *   <Button
 *    buttonName="Click me"
 *    onClick={() => console.log('Hi!')}
 *  />
 * )
 *
 * @param   {string} [buttonName] Button name
 * @param   {boolean} [disabled] Disable the button
 * @returns {React.FC} React Component
 */

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, buttonName, disabled = false, ...rest }) => (
  <StyledButton disabled={disabled} {...rest}>
    {children || (
      <Text type="body" color="white">
        {buttonName}
      </Text>
    )}
  </StyledButton>
)

export default Button
