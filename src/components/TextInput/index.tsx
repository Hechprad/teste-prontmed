import React from 'react'

import TextInputProps from './types'
import Input from './styles'

const TextInput: React.FC<TextInputProps> = ({
  value,
  placeholder,
  handleChange,
  ...rest
}) => (
  <Input
    value={value}
    placeholder={placeholder}
    onChange={(event) => handleChange(event.target.value)}
    {...rest}
  />
)

export default TextInput
