import React from 'react';
import { Twitter, Instagram, Linkedin, Sun, Moon } from './Icons';



const IconButton = ({ link, iconName = 'sun' }) => {
  const icons = {
    sun: <Sun />,
    moon: <Moon />,
    linkedin: <Linkedin />,
    instagram: <Instagram />,
    twitter: <Twitter />,
  }
  const renderIcon = () => icons[iconName] ?? '';
  return (
    <button className='up hoverable icon'>
      {renderIcon()}
    </button>
  )
}

export { IconButton }