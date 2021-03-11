import React from 'react'
import ReactDOM from 'react-dom'

import useHandleOverflow from './useHandleOverflow'

import * as s from './styles'
import * as t from './types'

const Dropdown: React.FC<t.DropdownProps> = ({
  children,
  isOpen,
  handleClose,
  header,
  size = 'sm',
  ...rest
}) => {
  useHandleOverflow(isOpen)

  return ReactDOM.createPortal(
    <s.DropdownWrapper>
      <s.DropdownOverlay isOpen={isOpen} onClick={() => handleClose()} />
      <s.DropdownContent isOpen={isOpen} size={size} {...rest}>
        {header ? <s.Header>{header}</s.Header> : null}
        <s.DropdownChildren>{children}</s.DropdownChildren>
      </s.DropdownContent>
    </s.DropdownWrapper>,
    document.querySelector('#root') as HTMLDivElement
  )
}

export default Dropdown
