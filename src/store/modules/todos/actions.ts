import { Types, TodosInterface } from './types'

export default function SetTodosList(
  payload: TodosInterface[]
): {
  type: string
  payload: TodosInterface[]
} {
  return {
    type: Types.SET_TODOS,
    payload,
  }
}
