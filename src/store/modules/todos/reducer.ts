import { ActionInterface, Types, TodoState } from './types'

const INITIAL_STATE: TodoState = {
  todos: [],
  isLoading: false,
  hasError: false,
}

const todosReducer = (
  state = INITIAL_STATE,
  action: ActionInterface
): TodoState => {
  switch (action.type) {
    case Types.SET_TODOS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
        hasError: false,
      }
    case Types.SET_TODOS_LOADING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    case Types.SET_TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    default:
      return state
  }
}

export default todosReducer
