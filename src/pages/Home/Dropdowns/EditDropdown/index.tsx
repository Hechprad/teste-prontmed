import React from 'react'

import { Dropdown, Text, TextInput } from 'components'
import useUpdateTodoName from 'hooks/useUpdateTodoName'

import EditDropdownProps from './types'
import { Button, Loading, Title, Wrapper } from './styles'

const EditDropdown: React.FC<EditDropdownProps> = ({
  isOpen,
  handleClose,
  selectedTodo,
}) => {
  const {
    updateTodoName,
    isUpdateLoading,
    hasUpdateError,
    deleted,
  } = useUpdateTodoName()
  const [newTodoName, setNewTodoName] = React.useState<string>('')

  React.useEffect(() => {
    if (!isOpen) {
      setNewTodoName('')
    }
    setNewTodoName(selectedTodo.name)
  }, [isOpen, selectedTodo.name])

  React.useEffect(() => {
    if (deleted) {
      handleClose()
    }
  }, [deleted, handleClose])

  const renderTitle = () => <Title type="body">Update todo name</Title>

  const renderUpdateButton = () => (
    <Button
      tryAgain={hasUpdateError}
      disabled={
        newTodoName.length === 0 ||
        selectedTodo.name === newTodoName ||
        isUpdateLoading
      }
      onClick={() => {
        if (newTodoName.length > 0 && selectedTodo.name !== newTodoName) {
          updateTodoName(selectedTodo, newTodoName)
        }
      }}
    >
      {hasUpdateError ? 'Try again' : 'Update'}
    </Button>
  )

  const getContent = () => {
    if (isUpdateLoading) {
      return <Loading />
    }

    return renderUpdateButton()
  }

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
        {getContent()}
      </Wrapper>
    </Dropdown>
  )
}

export default EditDropdown
