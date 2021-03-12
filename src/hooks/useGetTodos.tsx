import React from 'react'
import { useDispatch } from 'react-redux'

import api from 'services/api'
import { useTypedSelector } from 'store/modules/rootState'
import {
  SetTodosList,
  SetTodosListIsLoading,
  SetTodosListError,
} from 'store/modules/todos/actions'

import { TodoState } from 'store/modules/todos/types'

interface UseGetTodos extends TodoState {
  loadTodos: () => Promise<void>
}

const useGetTodos = (): UseGetTodos => {
  const dispatch = useDispatch()

  const { todos, isLoading, hasError } = useTypedSelector((store) => ({
    todos: store.todosList.todos,
    isLoading: store.todosList.isLoading,
    hasError: store.todosList.hasError,
  }))

  const loadTodos = React.useCallback(async (): Promise<void> => {
    dispatch(SetTodosListIsLoading())
    await api
      .get('/todos')
      .then(
        (response) =>
          response.data.length > 0 && dispatch(SetTodosList(response.data))
      )
      .catch(() => {
        dispatch(SetTodosListError())
      })
  }, [dispatch])

  React.useEffect(() => {
    loadTodos()
  }, [loadTodos])

  return { todos, hasError, isLoading, loadTodos }
}

export default useGetTodos
