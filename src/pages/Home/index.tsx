import { v4 } from 'uuid'

import Text from 'components/Text'
import useGetTodos from 'hooks/useGetTodos'

import Wrapper from './styles'

const Home: React.FC = () => {
  const { todos } = useGetTodos()

  return (
    <Wrapper>
      <ul>
        {todos.length
          ? todos.map((todo) => (
              <li key={v4()}>
                <Text>{todo.name}</Text>
              </li>
            ))
          : null}
      </ul>
    </Wrapper>
  )
}

export default Home
