import api, { baseUrlTodos } from 'services/api'
import useGetTodos from 'hooks/useGetTodos'

interface UseCreateTodo {
  createTodo: (name: string) => Promise<void>
}

const useCreateTodo = (): UseCreateTodo => {
  const { loadTodos } = useGetTodos()

  const createTodo = async (name: string): Promise<void> => {
    await api
      .post(baseUrlTodos, {
        name,
      })
      .then(() => {
        loadTodos()
      })
  }

  return { createTodo }
}

export default useCreateTodo
