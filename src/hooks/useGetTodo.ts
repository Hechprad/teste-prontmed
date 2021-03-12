import React from 'react'

import api, { baseUrlTodos } from 'services/api'
import { TodoInterface } from 'store/modules/todos/types'

interface UseGetTodo {
  getTodo: (id: number) => Promise<void>
  todo: TodoInterface
  isGetLoading: boolean
  hasGetError: boolean
}

const useGetTodo = (): UseGetTodo => {
  const [isGetLoading, setIsGetLoading] = React.useState<boolean>(false)
  const [hasGetError, setHasGetError] = React.useState<boolean>(false)
  const [todo, setTodo] = React.useState<TodoInterface>({
    id: 0,
    name: '',
    completed: false,
    inserted_at: '',
    updated_at: '',
  })

  const getTodo = async (id: number): Promise<void> => {
    setIsGetLoading(true)
    await api
      .get(`${baseUrlTodos}/${id}`)
      .then((response) => {
        setTodo(response.data)
        setIsGetLoading(false)
        setHasGetError(false)
      })
      .catch(() => {
        setIsGetLoading(false)
        setHasGetError(true)
      })
      .finally(() => {
        setIsGetLoading(false)
      })
  }

  return { getTodo, todo, isGetLoading, hasGetError }
}

export default useGetTodo
