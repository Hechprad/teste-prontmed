import React from 'react'
import { v4 } from 'uuid'

import useGetTodos from 'hooks/useGetTodos'
import useCheckTodo from 'hooks/useCheckTodo'
import useDeleteTodo from 'hooks/useDeleteTodo'
import { Button, Dropdown, Menu, Text, TodoItem } from 'components'

import AddDropdown from './Dropdowns/AddDropdown'

import { ButtonWrapper, Content, LoadingIcon, Title, Ul } from './styles'

const Home: React.FC = () => {
  const { checkTodo } = useCheckTodo()
  const { deleteTodo } = useDeleteTodo()
  const { todos, loadTodos, isLoading, hasError } = useGetTodos()
  const [isAddOpen, setIsAddOpen] = React.useState<boolean>(false)
  const [isEditOpen, setIsEditOpen] = React.useState<boolean>(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false)

  // get todos list
  React.useEffect(() => {
    if (!todos.length && !hasError && !isLoading) {
      loadTodos()
    }
  }, [loadTodos, todos, hasError, isLoading])

  const renderList = React.useMemo(
    () => (
      <Ul>
        {todos
          .sort((a, b) => +a.completed - +b.completed)
          .map((todo) => (
            <TodoItem
              key={v4()}
              id={todo.id}
              title={todo.name}
              checked={todo.completed}
              handleEditClick={() => setIsEditOpen(true)}
              handleCheckClick={() => checkTodo(todo)}
              handleDeleteClick={() => deleteTodo(todo.id)}
            />
          ))}
      </Ul>
    ),
    [checkTodo, deleteTodo, todos]
  )

  const renderTryAgainButton = () => (
    <ButtonWrapper>
      <Text>Ops...</Text>
      <Button buttonName="Try again" onClick={() => loadTodos()} />
    </ButtonWrapper>
  )

  const renderLoading = () => <LoadingIcon />

  const getContent = () => {
    if (isLoading) {
      return renderLoading()
    }

    if (!isLoading && hasError) {
      return renderTryAgainButton()
    }

    if (!isLoading && !hasError && todos.length) {
      return renderList
    }

    return renderLoading()
  }

  return (
    <>
      <Content>
        <Title type="heading">All Tasks</Title>
        <Menu
          handleAddOpen={() => setIsAddOpen(true)}
          handleSearchOpen={() => setIsSearchOpen(true)}
        />
        {getContent()}
      </Content>
      <AddDropdown isOpen={isAddOpen} handleClose={() => setIsAddOpen(false)} />
      <Dropdown
        isOpen={isSearchOpen}
        handleClose={() => setIsSearchOpen(false)}
      />
      <Dropdown isOpen={isEditOpen} handleClose={() => setIsEditOpen(false)} />
    </>
  )
}

export default Home
