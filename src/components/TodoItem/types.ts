export default interface TodoItemProps {
  id: number
  title: string
  checked: boolean
  handleCheckClick: () => void
  handleEditClick: () => void
  handleDeleteClick: () => void
}
