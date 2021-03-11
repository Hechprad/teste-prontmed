export default interface TodoItemProps {
  title: string
  checked: boolean
  handleCheckClick: () => void
  handleEditClick: () => void
  handleDeleteClick: () => void
}
