import React from 'react'

import api, { baseUrlTodos } from 'services/api'
import useGetTodos from 'hooks/useGetTodos'

interface UseDeleteTodo {
  deleteTodo: (id: number) => Promise<void>
}

const useDeleteTodo = (): UseDeleteTodo => {
  const { loadTodos } = useGetTodos()

  const deleteTodo = React.useCallback(
    async (id: number): Promise<void> => {
      await api
        .delete(`${baseUrlTodos}/${id}`)
        .then(() => loadTodos())
        .catch((e) => {
          throw new Error(e)
        })
    },
    [loadTodos]
  )

  return { deleteTodo }
}

export default useDeleteTodo
