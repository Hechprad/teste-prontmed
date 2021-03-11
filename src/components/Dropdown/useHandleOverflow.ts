import React from 'react'

const useHandleOverflow = (isOpen: boolean): void => {
  React.useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement
    const html = document.querySelector('html') as HTMLHtmlElement

    if (isOpen) {
      body.style.overflow = 'hidden'
      html.style.overflowY = 'hidden'
    }

    function handleOverflow() {
      body.style.overflow = 'visible'
      html.style.overflowY = 'visible'
    }
    return () => handleOverflow()
  }, [isOpen])
}

export default useHandleOverflow
