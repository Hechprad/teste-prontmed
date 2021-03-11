import React from 'react'
import { v4 } from 'uuid'

import { TodoItem } from 'components'
import useGetTodos from 'hooks/useGetTodos'

import api from 'services/api'

import { TodoInterface } from 'store/modules/todos/types'
import Wrapper from './styles'

const Home: React.FC = () => {
  const { todos, loadTodos } = useGetTodos()

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
    <Wrapper>
      <ul>
        {todos.length
          ? todos
              .sort((a, b) => +a.completed - +b.completed)
              .map((todo) => (
                <TodoItem
                  key={v4()}
                  title={todo.name}
                  checked={todo.completed}
                  handleEditClick={() => console.log('edit')}
                  handleCheckClick={() => checkTodo(todo)}
                  handleDeleteClick={() => deleteTodo(todo.id)}
                />
              ))
          : null}
      </ul>
    </Wrapper>
  )
}

export default Home
