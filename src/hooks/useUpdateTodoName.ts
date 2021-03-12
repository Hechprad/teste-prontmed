import React from 'react'

import api, { baseUrlTodos } from 'services/api'
import useGetTodos from 'hooks/useGetTodos'
import { TodoInterface } from 'store/modules/todos/types'

interface UseUpdateTodoName {
  updateTodoName: (todo: TodoInterface, newName: string) => Promise<void>
}

const useUpdateTodoName = (): UseUpdateTodoName => {
  const { loadTodos } = useGetTodos()

  const updateTodoName = React.useCallback(
    async (todo: TodoInterface, newName: string): Promise<void> => {
      await api
        .put(`${baseUrlTodos}/${todo.id}`, {
          name: newName,
          completed: todo.completed,
        })
        .then(() => loadTodos())
        .catch((e) => {
          throw new Error(e)
        })
    },
    [loadTodos]
  )

  return { updateTodoName }
}

export default useUpdateTodoName
