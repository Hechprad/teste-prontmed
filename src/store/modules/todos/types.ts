export const Types = {
  SET_TODOS: 'SET_TODOS',
}

export interface TodosInterface {
  id: number
  name: string
  completed: boolean
  inserted_at: string
  updated_at: string
}

export interface ActionInterface {
  type: keyof typeof Types
  payload: TodosInterface[]
}
