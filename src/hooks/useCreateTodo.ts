import React from 'react'

import api, { baseUrlTodos } from 'services/api'
import useGetTodos from 'hooks/useGetTodos'

interface UseCreateTodo {
  createTodo: (name: string) => Promise<void>
  isCreateLoading: boolean
  hasCreateError: boolean
  created: boolean
}

const useCreateTodo = (): UseCreateTodo => {
  const { loadTodos } = useGetTodos()
  const [created, setCreated] = React.useState<boolean>(false)
  const [hasCreateError, setHasCreateError] = React.useState<boolean>(false)
  const [isCreateLoading, setIsCreateLoading] = React.useState<boolean>(false)

  const createTodo = async (name: string): Promise<void> => {
    setIsCreateLoading(true)
    setCreated(false)
    await api
      .post(baseUrlTodos, {
        name,
      })
      .then((response) => {
        loadTodos()
        setIsCreateLoading(false)
        setHasCreateError(false)
        if (response.data.id > 0) {
          setCreated(true)
        }
      })
      .catch(() => {
        setIsCreateLoading(false)
        setHasCreateError(true)
        setCreated(false)
      })
      .finally(() => {
        setIsCreateLoading(false)
        setCreated(false)
      })
  }

  return { createTodo, created, isCreateLoading, hasCreateError }
}

export default useCreateTodo
