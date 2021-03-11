import React from 'react'

import { Text } from 'components'

import {
  Li,
  EditIcon,
  CheckIcon,
  TrashIcon,
  RightContent,
  LeftContent,
} from './styles'
import TodoItemProps from './types'

const TodoItem: React.FC<TodoItemProps> = ({
  title,
  checked,
  handleCheckClick,
  handleEditClick,
  handleDeleteClick,
  ...rest
}) => (
  <Li {...rest}>
    <LeftContent>
      <CheckIcon checked={checked} onClick={() => handleCheckClick()} />
      <Text>{title}</Text>
    </LeftContent>
    <RightContent>
      <EditIcon onClick={() => handleEditClick()} />
      <TrashIcon onClick={() => handleDeleteClick()} />
    </RightContent>
  </Li>
)

export default TodoItem
