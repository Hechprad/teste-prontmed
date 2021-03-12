import { TodoInterface } from 'store/modules/todos/types'

interface EditDropdownProps {
  isOpen: boolean
  selectedTodo: TodoInterface
  handleClose: () => void
}

export default EditDropdownProps
