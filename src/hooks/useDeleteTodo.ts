import React from 'react'

import api, { baseUrlTodos } from 'services/api'
import useGetTodos from 'hooks/useGetTodos'

interface UseDeleteTodo {
  deleteTodo: (id: number) => Promise<void>
  isDeleteLoading: boolean
  hasDeleteError: boolean
}

const useDeleteTodo = (): UseDeleteTodo => {
  const { loadTodos } = useGetTodos()
  const [isDeleteLoading, setIsDeleteLoading] = React.useState<boolean>(false)
  const [hasDeleteError, setHasDeleteError] = React.useState<boolean>(false)

  const deleteTodo = React.useCallback(
    async (id: number): Promise<void> => {
      setIsDeleteLoading(true)
      await api
        .delete(`${baseUrlTodos}/${id}`)
        .then(() => {
          loadTodos()
          setIsDeleteLoading(false)
          setHasDeleteError(false)
        })
        .catch(() => {
          setIsDeleteLoading(false)
          setHasDeleteError(true)
        })
        .finally(() => {
          setIsDeleteLoading(false)
        })
    },
    [loadTodos]
  )

  return { deleteTodo, isDeleteLoading, hasDeleteError }
}

export default useDeleteTodo
