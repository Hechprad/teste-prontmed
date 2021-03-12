export const Types = {
  SET_TODOS: 'SET_TODOS',
  SET_TODOS_LOADING: 'SET_TODOS_LOADING',
  SET_TODOS_ERROR: 'SET_TODOS_ERROR',
}

export interface TodoInterface {
  id: number
  name: string
  completed: boolean
  inserted_at: string
  updated_at: string
}

export interface ActionInterface {
  type: keyof typeof Types
  payload: TodoInterface[]
}

export interface TodoState {
  todos: TodoInterface[]
  isLoading: boolean
  hasError: boolean
}
