import React from 'react'

import useGetTodo from 'hooks/useGetTodo'
import useDeleteTodo from 'hooks/useDeleteTodo'
import { Dropdown, Text, TodoItem, Loading } from 'components'

import SearchDropdownProps from './types'
import { Button, TextInput, Title, Wrapper } from './styles'

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  isOpen,
  handleClose,
}) => {
  const { getTodo, todo, isGetLoading, hasGetError } = useGetTodo()
  const { deleteTodo, isDeleteLoading, hasDeleteError } = useDeleteTodo()
  const [todoID, setTodoID] = React.useState<string>('')

  const renderTitle = () => <Title type="body">Search todo by ID</Title>

  React.useEffect(() => {
    setTodoID((prevState) => prevState.replace(/\D/g, ''))
  }, [todoID])

  const renderTodo = () => (
    <TodoItem
      id={todo.id}
      title={todo.name}
      checked={todo.completed}
      noEdit
      noCheck
      handleDeleteClick={() => {
        deleteTodo(todo.id)
        setTodoID('')
      }}
    />
  )
  const renderErrorMessage = () => {
    if (hasGetError) {
      return <Text>Not found</Text>
    }

    if (hasDeleteError) {
      return (
        <Text>It is not possible to delete it now. Please try again later</Text>
      )
    }

    return <Text>Ops...</Text>
  }

  const renderLoading = () => <Loading />

  const getContent = () => {
    if (isGetLoading || isDeleteLoading) {
      return renderLoading()
    }

    if (!isGetLoading && !isDeleteLoading && (hasDeleteError || hasGetError)) {
      return renderErrorMessage()
    }

    if (
      !isGetLoading &&
      !hasGetError &&
      !isDeleteLoading &&
      !hasDeleteError &&
      todo.id > 0 &&
      +todoID > 0 &&
      todo.id === +todoID
    ) {
      return renderTodo()
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
          placeholder="TODO ID"
          value={todoID}
          handleChange={setTodoID}
        />
        <Button
          disabled={isGetLoading || todoID.length === 0}
          onClick={() => {
            if (todoID.length > 0) {
              getTodo(+todoID)
            }
          }}
        >
          Search
        </Button>
      </Wrapper>
      <Wrapper>{getContent()}</Wrapper>
    </Dropdown>
  )
}

export default SearchDropdown
