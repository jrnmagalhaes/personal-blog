import React from 'react'
import { IconButton } from '../components';

const Header = ({ currentMode, toggleNightMode, night }) => {
  return (
    <header>
      <IconButton onClick={toggleNightMode} iconName={night ? 'moon' : 'sun'} text={currentMode} />
    </header>
  )
}

export { Header }