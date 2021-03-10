import { ActionInterface, Types, TodosInterface } from './types'

const INITIAL_STATE: { list: TodosInterface[] } = {
  list: [],
}

const todosReducer = (
  state = INITIAL_STATE,
  action: ActionInterface
): { list: TodosInterface[] } => {
  switch (action.type) {
    case Types.SET_TODOS:
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state
  }
}

export default todosReducer
