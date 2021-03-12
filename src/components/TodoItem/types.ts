export default interface TodoItemProps {
  id: number
  title: string
  checked: boolean
  noEdit?: boolean
  noCheck?: boolean
  handleCheckClick?: () => void
  handleEditClick?: () => void
  handleDeleteClick: () => void
}
