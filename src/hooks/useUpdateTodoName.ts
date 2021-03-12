import React from 'react'

import api, { baseUrlTodos } from 'services/api'
import useGetTodos from 'hooks/useGetTodos'
import { TodoInterface } from 'store/modules/todos/types'

interface UseUpdateTodoName {
  updateTodoName: (todo: TodoInterface, newName: string) => Promise<void>
  isUpdateLoading: boolean
  hasUpdateError: boolean
  deleted: boolean
}

const useUpdateTodoName = (): UseUpdateTodoName => {
  const { loadTodos } = useGetTodos()
  const [deleted, setDeleted] = React.useState<boolean>(false)
  const [isUpdateLoading, setIsUpdateLoading] = React.useState<boolean>(false)
  const [hasUpdateError, setHasUpdateError] = React.useState<boolean>(false)

  const updateTodoName = React.useCallback(
    async (todo: TodoInterface, newName: string): Promise<void> => {
      setIsUpdateLoading(true)
      setDeleted(false)
      await api
        .put(`${baseUrlTodos}/${todo.id}`, {
          name: newName,
          completed: todo.completed,
        })
        .then((response) => {
          loadTodos()
          setIsUpdateLoading(false)
          setHasUpdateError(false)
          if (response.status === 204) {
            setDeleted(true)
          }
        })
        .catch(() => {
          setIsUpdateLoading(false)
          setHasUpdateError(true)
          setDeleted(false)
        })
        .finally(() => {
          setIsUpdateLoading(false)
          setDeleted(false)
        })
    },
    [loadTodos]
  )

  return { updateTodoName, isUpdateLoading, hasUpdateError, deleted }
}

export default useUpdateTodoName
