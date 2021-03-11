import React from 'react'
import { useDispatch } from 'react-redux'

import api from 'services/api'
import { useTypedSelector } from 'store/modules/rootState'
import { SetTodosList, SetTodosListError } from 'store/modules/todos/actions'

import { TodoState } from 'store/modules/todos/types'

interface UseGetTodos extends TodoState {
  loadTodos: () => Promise<void>
}

const useGetTodos = (): UseGetTodos => {
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
      .catch((e) => {
        dispatch(SetTodosListError())
      })
  }, [dispatch])

  React.useEffect(() => {
    loadTodos()
  }, [loadTodos])

  return { todos, hasError, loadTodos }
}

export default useGetTodos
