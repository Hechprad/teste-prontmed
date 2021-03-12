import React from 'react'

import Text from 'components/Text'

import StyledButton from './styles'
import ButtonProps from './types'

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
