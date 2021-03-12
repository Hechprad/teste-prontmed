import React from 'react'

import api, { baseUrlTodos } from 'services/api'
import { TodoInterface } from 'store/modules/todos/types'

interface UseGetTodo {
  getTodo: (id: number) => Promise<void>
  todo: TodoInterface
}

const useGetTodo = (): UseGetTodo => {
  const [todo, setTodo] = React.useState<TodoInterface>({
    id: 0,
    name: '',
    completed: false,
    inserted_at: '',
    updated_at: '',
  })

  const getTodo = async (id: number): Promise<void> => {
    await api
      .get(`${baseUrlTodos}/${id}`)
      .then((response) => setTodo(response.data))
      .catch((e) => {
        throw new Error(e)
      })
  }

  return { getTodo, todo }
}

export default useGetTodo
