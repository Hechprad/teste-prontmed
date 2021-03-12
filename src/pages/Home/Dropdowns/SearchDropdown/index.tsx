import React from 'react'

import useGetTodo from 'hooks/useGetTodo'
import useDeleteTodo from 'hooks/useDeleteTodo'
import { Dropdown, TodoItem } from 'components'

import SearchDropdownProps from './types'
import { Button, TextInput, Title, Wrapper } from './styles'

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  isOpen,
  handleClose,
}) => {
  const { getTodo, todo } = useGetTodo()
  const { deleteTodo } = useDeleteTodo()
  const [todoID, setTodoID] = React.useState<string>('')

  const renderTitle = () => <Title type="body">Search todo by ID</Title>

  React.useEffect(() => {
    setTodoID((prevState) => prevState.replace(/\D/g, ''))
  }, [todoID])

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
          onClick={() => {
            if (todoID.length > 0) {
              getTodo(+todoID)
            }
          }}
        >
          Search
        </Button>
      </Wrapper>
      <Wrapper>
        <TodoItem
          id={todo.id}
          title={todo.name}
          checked={todo.completed}
          noEdit
          noCheck
          handleDeleteClick={() => {
            deleteTodo(todo.id)
            handleClose()
          }}
        />
      </Wrapper>
    </Dropdown>
  )
}

export default SearchDropdown
