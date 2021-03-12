import React from 'react'

import { Text } from 'components'

/**
 * Menu React Component
 *
 * @component
 * @example
 *
 * import { Menu } from 'components'
 *
 * const Component: React.FC = () => {
 * const [isAddOpen, setIsAddOpen] = React.useState<boolean>(false)
 * const [isSearchOpen, setIsSearchOpen] = React.useState<boolean>(false)
 *
 *  return (
 *    <Menu
 *     handleAddOpen={() => setIsAddOpen(true)}
 *     handleSearchOpen={() => setIsSearchOpen(true)}
 *    />
 *  )
 * }
 *
 * @param   {React.Dispatch<React.SetStateAction<boolean>>} handleAddOpen React state to handle with add setIsOpen
 * @param   {React.Dispatch<React.SetStateAction<boolean>>} handleSearchOpen React state to handle with search setIsOpen
 * @returns {React.FC} React Component
 */

import MenuProps from './types'
import { Icon, MenuContent, AddTodoIcon, SearchTodoIcon } from './styles'

const Menu: React.FC<MenuProps> = ({
  handleAddOpen,
  handleSearchOpen,
  ...rest
}) => (
  <MenuContent {...rest}>
    <Icon onClick={() => handleSearchOpen()}>
      <SearchTodoIcon />
      <Text type="subtitle" color="blue">
        Search
      </Text>
    </Icon>
    <Icon onClick={() => handleAddOpen()}>
      <AddTodoIcon />
      <Text type="subtitle" color="blue">
        Add todo
      </Text>
    </Icon>
  </MenuContent>
)

export default Menu
