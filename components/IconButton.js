import React from 'react';
import { Twitter, Instagram, Linkedin, Sun, Moon, Logo } from './Icons';



const IconButton = ({ onClick, iconName = 'sun', text }) => {
  const icons = {
    sun: <Sun />,
    moon: <Moon />,
    linkedin: <Linkedin />,
    instagram: <Instagram />,
    twitter: <Twitter />,
    logo: <Logo />,
  }
  const renderIcon = () => icons[iconName] ?? '';
  return (
    <button onClick={onClick} className='up hoverable icon'>
      {renderIcon()}
      {text && <span>{text}</span>}
    </button>
  )
}

export { IconButton }