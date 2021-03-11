import React from 'react'
import { v4 } from 'uuid'

import { Dropdown, Menu, TodoItem } from 'components'
import useGetTodos from 'hooks/useGetTodos'

import api from 'services/api'

import { TodoInterface } from 'store/modules/todos/types'
import { Title, Wrapper } from './styles'

const Home: React.FC = () => {
  const { todos, loadTodos } = useGetTodos()
  const [isAddOpen, setIsAddOpen] = React.useState<boolean>(false)
  const [isEditOpen, setIsEditOpen] = React.useState<boolean>(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false)

  const deleteTodo = async (id: number): Promise<void> => {
    await api
      .delete(`/todos/${id}`)
      .then(() => loadTodos())
      .catch((e) => {
        throw new Error(e)
      })
  }

  const checkTodo = async (todo: TodoInterface): Promise<void> => {
    await api
      .put(`/todos/${todo.id}`, {
        name: todo.name,
        completed: !todo.completed,
      })
      .then(() => loadTodos())
      .catch((e) => {
        throw new Error(e)
      })
  }

  return (
    <>
      <Wrapper>
        <Title type="heading">All Tasks</Title>
        <Menu
          handleAddOpen={() => setIsAddOpen(true)}
          handleSearchOpen={() => setIsSearchOpen(true)}
        />
        <ul>
          {todos.length
            ? todos
                .sort((a, b) => +a.completed - +b.completed)
                .map((todo) => (
                  <TodoItem
                    key={v4()}
                    title={todo.name}
                    checked={todo.completed}
                    handleEditClick={() => setIsEditOpen(true)}
                    handleCheckClick={() => checkTodo(todo)}
                    handleDeleteClick={() => deleteTodo(todo.id)}
                  />
                ))
            : null}
        </ul>
      </Wrapper>
      <Dropdown
        isOpen={isSearchOpen}
        handleClose={() => setIsSearchOpen(false)}
      />
      <Dropdown isOpen={isAddOpen} handleClose={() => setIsAddOpen(false)} />
      <Dropdown isOpen={isEditOpen} handleClose={() => setIsEditOpen(false)} />
    </>
  )
}

export default Home
