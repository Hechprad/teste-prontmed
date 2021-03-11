import React from 'react'

import { Text } from 'components'

import MenuProps from './types'
import { Icon, MenuContent, AddTodoIcon, SearchTodoIcon } from './styles'

const Menu: React.FC<MenuProps> = ({ handleAddOpen, handleSearchOpen }) => (
  <MenuContent>
    <Icon onClick={() => handleSearchOpen()}>
      <SearchTodoIcon />
      <Text type="subtitle" color="blue1">
        Search
      </Text>
    </Icon>
    <Icon onClick={() => handleAddOpen()}>
      <AddTodoIcon />
      <Text type="subtitle" color="blue1">
        Add todo
      </Text>
    </Icon>
  </MenuContent>
)

export default Menu
