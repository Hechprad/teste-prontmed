import React from 'react'

import { Dropdown, Text, TextInput } from 'components'
import useUpdateTodoName from 'hooks/useUpdateTodoName'

import EditDropdownProps from './types'
import { Button, Title, Wrapper } from './styles'

const EditDropdown: React.FC<EditDropdownProps> = ({
  isOpen,
  handleClose,
  selectedTodo,
}) => {
  const { updateTodoName } = useUpdateTodoName()
  const [newTodoName, setNewTodoName] = React.useState<string>('')

  React.useEffect(() => {
    if (!isOpen) {
      setNewTodoName('')
    }
    setNewTodoName(selectedTodo.name)
  }, [isOpen, selectedTodo.name])

  const renderTitle = () => <Title type="body">Update todo name</Title>

  return (
    <Dropdown
      isOpen={isOpen}
      header={renderTitle()}
      handleClose={() => handleClose()}
    >
      <Wrapper>
        <Text>Todo ID: {selectedTodo.id}</Text>
        <TextInput
          placeholder="New name"
          value={newTodoName}
          handleChange={setNewTodoName}
        />
        <Button
          disabled={
            newTodoName.length === 0 || selectedTodo.name === newTodoName
          }
          onClick={() => {
            if (newTodoName.length > 0 && selectedTodo.name !== newTodoName) {
              updateTodoName(selectedTodo, newTodoName)
              handleClose()
            }
          }}
        >
          Update
        </Button>
      </Wrapper>
    </Dropdown>
  )
}

export default EditDropdown
