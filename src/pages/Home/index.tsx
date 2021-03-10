import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import api from 'services/api'
import SetTodosList from 'store/modules/todos/actions'

import Wrapper from './styles'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function loadTodos(): Promise<void> {
      const response = await api.get('/todos')

      setTodos(response.data)
    }

    if (todos.length === 0) {
      loadTodos()
    }
  }, [todos])

  useEffect(() => {
    if (todos.length > 0) {
      dispatch(SetTodosList(todos))
    }
  }, [todos, dispatch])

  return <Wrapper>oi</Wrapper>
}

export default Home
