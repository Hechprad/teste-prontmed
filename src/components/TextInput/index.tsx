import React from 'react'

import TextInputProps from './types'
import Input from './styles'

const TextInput: React.FC<TextInputProps> = ({
  value,
  labelText,
  handleChange,
  ...rest
}) => (
  <Input
    name={labelText.toLowerCase()}
    value={value}
    placeholder="New todo name"
    onChange={(event) => handleChange(event.target.value)}
    {...rest}
  />
)

export default TextInput
