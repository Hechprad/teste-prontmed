import React from 'react'

import useCreateTodo from 'hooks/useCreateTodo'
import { Dropdown, TextInput } from 'components'

import AddDropdownProps from './types'
import { AddTodoIcon, Button, Title, Wrapper, Loading } from './styles'

const AddDropdown: React.FC<AddDropdownProps> = ({ isOpen, handleClose }) => {
  const {
    createTodo,
    created,
    isCreateLoading,
    hasCreateError,
  } = useCreateTodo()
  const [todoName, setTodoName] = React.useState<string>('')

  React.useEffect(() => {
    if (!isOpen) {
      setTodoName('')
    }
  }, [isOpen])

  React.useEffect(() => {
    if (created) {
      handleClose()
    }
  }, [created, handleClose])

  const renderTitle = () => <Title type="body">Add new todo</Title>

  const renderAddButton = () => (
    <Button
      disabled={todoName.length === 0}
      onClick={() => {
        if (todoName.length > 0) {
          createTodo(todoName)
        }
      }}
    >
      <AddTodoIcon />
    </Button>
  )

  const renderErrorMessage = () => {
    return (
      <Button
        tryAgain
        disabled={todoName.length === 0}
        onClick={() => {
          if (todoName.length > 0) {
            createTodo(todoName)
          }
        }}
      >
        Try again
      </Button>
    )
  }

  const renderLoading = () => <Loading />

  const getContent = () => {
    if (isCreateLoading) {
      return renderLoading()
    }

    if (!isCreateLoading && hasCreateError) {
      return renderErrorMessage()
    }

    if (!isCreateLoading && !hasCreateError) {
      return renderAddButton()
    }

    return null
  }

  return (
    <Dropdown
      isOpen={isOpen}
      header={renderTitle()}
      handleClose={() => handleClose()}
    >
      <Wrapper>
        <TextInput
          placeholder="New todo name"
          value={todoName}
          handleChange={setTodoName}
        />
        {getContent()}
      </Wrapper>
    </Dropdown>
  )
}

export default AddDropdown
