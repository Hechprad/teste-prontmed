import reducer from './reducer'
import { Types } from './types'

describe('Todos Reducer', () => {
  it('should return INITIAL_STATE', () => {
    expect(reducer(undefined, {})).toEqual({
      todos: [],
      isLoading: false,
      hasError: false,
    })
  })

  it('should handle SET_TODOS', () => {
    expect(
      reducer(
        {
          todos: [],
          isLoading: false,
          hasError: false,
        },
        {
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
        }
      )
    ).toEqual({
      todos: [
        {
          completed: true,
          id: 1,
          inserted_at: '2021-03-09T22:00:55.111320',
          name: 'new todo 1',
          updated_at: '2021-03-09T22:34:55.111320',
        },
      ],
      isLoading: false,
      hasError: false,
    })
  })

  it('should handle SET_TODOS_ERROR', () => {
    expect(
      reducer(
        {
          todos: [],
          hasError: false,
          isLoading: false,
        },
        {
          type: Types.SET_TODOS_ERROR,
        }
      )
    ).toEqual({
      todos: [],
      hasError: true,
      isLoading: false,
    })
  })
})
