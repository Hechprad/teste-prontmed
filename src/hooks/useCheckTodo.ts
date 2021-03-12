import React from 'react'

import api, { baseUrlTodos } from 'services/api'
import { TodoInterface } from 'store/modules/todos/types'
import useGetTodos from 'hooks/useGetTodos'

interface UseCheckTodo {
  checkTodo: (todo: TodoInterface) => Promise<void>
}

const useCheckTodo = (): UseCheckTodo => {
  const { loadTodos } = useGetTodos()

  const checkTodo = React.useCallback(
    async (todo: TodoInterface): Promise<void> => {
      await api
        .put(`${baseUrlTodos}/${todo.id}`, {
          name: todo.name,
          completed: !todo.completed,
        })
        .then(() => loadTodos())
    },
    [loadTodos]
  )

  return { checkTodo }
}

export default useCheckTodo
