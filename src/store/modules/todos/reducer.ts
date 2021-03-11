import { ActionInterface, Types, TodoState } from './types'

const INITIAL_STATE: TodoState = {
  todos: [],
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
        hasError: false,
      }
    case Types.SET_TODOS_ERROR:
      return {
        ...state,
        hasError: true,
      }
    default:
      return state
  }
}

export default todosReducer
