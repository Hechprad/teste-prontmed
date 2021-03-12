import { Types } from './types'
import {
  SetTodosList,
  SetTodosListIsLoading,
  SetTodosListError,
} from './action'

describe('Todos Actions', () => {
  test('if SetTodosList returns the correct object', () => {
    expect(
      SetTodosList([
        {
          completed: true,
          id: 1,
          inserted_at: '2021-03-09T22:00:55.111320',
          name: 'new todo 1',
          updated_at: '2021-03-09T22:34:55.111320',
        },
      ])
    ).toEqual({
      type: Types.SET_TODOS,
      payload: [
        {
          completed: true,
          id: 1,
          inserted_at: '2021-03-09T22:00:55.111320',
          name: 'new todo 1',
          updated_at: '2021-03-09T22:34:55.111320',
        },
      ],
    })
  })

  test('if SetTodosListIsLoading returns the correct object', () => {
    expect(SetTodosListIsLoading()).toEqual({
      type: Types.SET_TODOS_LOADING,
    })
  })

  test('if SetTodosListError returns the correct object', () => {
    expect(SetTodosListError()).toEqual({
      type: Types.SET_TODOS_ERROR,
    })
  })
})
