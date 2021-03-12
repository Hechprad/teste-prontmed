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
  id,
  title,
  checked,
  noEdit = false,
  noCheck = false,
  handleCheckClick,
  handleEditClick,
  handleDeleteClick,
  ...rest
}) => (
  <Li {...rest}>
    <LeftContent>
      {!noCheck ? (
        <CheckIcon
          checked={checked}
          onClick={() => handleCheckClick && handleCheckClick()}
        />
      ) : null}
      {id && title.length > 0 ? (
        <Text>
          ID: {id} - {title}
        </Text>
      ) : null}
    </LeftContent>
    <RightContent>
      {!noEdit ? (
        <EditIcon onClick={() => handleEditClick && handleEditClick()} />
      ) : null}
      <TrashIcon onClick={() => handleDeleteClick()} />
    </RightContent>
  </Li>
)

export default TodoItem
