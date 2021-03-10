import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { TodoState } from 'store/modules/todos/types'

export interface RootState {
  todosList: TodoState
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
