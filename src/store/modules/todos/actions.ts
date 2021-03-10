import { Types, TodoInterface } from './types'

export function SetTodosList(
  payload: TodoInterface[]
): {
  type: string
  payload: TodoInterface[]
} {
  return {
    type: Types.SET_TODOS,
    payload,
  }
}

export function SetTodosListError(): {
  type: string
} {
  return {
    type: Types.SET_TODOS_ERROR,
  }
}
