import React from 'react'

import useCreateTodo from 'hooks/useCreateTodo'
import { Dropdown, TextInput } from 'components'

import AddDropdownProps from './types'
import { AddTodoIcon, Button, Title, Wrapper } from './styles'

const AddDropdown: React.FC<AddDropdownProps> = ({ isOpen, handleClose }) => {
  const { createTodo } = useCreateTodo()
  const [todoName, setTodoName] = React.useState<string>('')

  React.useEffect(() => {
    if (!isOpen) {
      setTodoName('')
    }
  }, [isOpen])

  const renderTitle = () => <Title type="body">Add new todo</Title>

  return (
    <Dropdown
      isOpen={isOpen}
      header={renderTitle()}
      handleClose={() => handleClose()}
    >
      <Wrapper>
        <TextInput
          labelText="label"
          value={todoName}
          handleChange={setTodoName}
        />
        <Button
          disabled={todoName.length === 0}
          onClick={() => {
            if (todoName.length > 0) {
              createTodo(todoName)
              handleClose()
            }
          }}
        >
          <AddTodoIcon />
        </Button>
      </Wrapper>
    </Dropdown>
  )
}

export default AddDropdown
