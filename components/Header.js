import React from 'react';
import Link from 'next/link';
import { IconButton } from '../components';

const Header = ({ currentMode, toggleNightMode, night }) => {
  return (
    <header>
      <Link href={'/'} passHref>
        <a>
          <IconButton iconName={'logo'} />
        </a>
      </Link>
      <IconButton onClick={toggleNightMode} iconName={night ? 'moon' : 'sun'} text={currentMode} />
    </header>
  )
}

export { Header }