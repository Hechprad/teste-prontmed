import React from 'react'
import { useDispatch } from 'react-redux'

import api from 'services/api'
import { useTypedSelector } from 'store/modules/rootState'
import { SetTodosList, SetTodosListError } from 'store/modules/todos/actions'

import { TodoState } from 'store/modules/todos/types'

const useGetTodos = (): TodoState => {
  const dispatch = useDispatch()

  const { todos, hasError } = useTypedSelector((store) => ({
    todos: store.todosList.todos,
    hasError: store.todosList.hasError,
  }))

  const loadTodos = React.useCallback(async (): Promise<void> => {
    await api
      .get('/todos')
      .then(
        (response) =>
          response.data.length > 0 && dispatch(SetTodosList(response.data))
      )
      .catch(() => dispatch(SetTodosListError()))
  }, [dispatch])

  React.useEffect(() => {
    loadTodos()
  }, [loadTodos])

  return { todos, hasError }
}

export default useGetTodos
