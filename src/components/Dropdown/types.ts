export interface DropdownProps extends DropdownContent {
  handleClose: () => void
  header?: React.ReactNode
}

export interface DropdownContent extends IsOpen {
  size?: 'sm' | 'lg'
}

export interface IsOpen {
  isOpen: boolean
}
