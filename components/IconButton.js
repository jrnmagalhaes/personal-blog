import React from 'react';
import { Twitter, Instagram, Linkedin, Sun, Moon, Logo, Back } from './Icons';

/**
 * 
 * @param {function} onClick - Funtion to be executed after a click.
 * @param {('sun' | 'moon' | 'linkedin' | 'instagram' | 'twitter' | 'logo' | 'back')} [iconName = sun] - Name of the icon that will be rendered.
 * @param {string} [text] - Text to be rendered in the right side.
 */
const IconButton = ({ onClick, iconName = 'sun', text }) => {
  const icons = {
    sun: <Sun />,
    moon: <Moon />,
    linkedin: <Linkedin />,
    instagram: <Instagram />,
    twitter: <Twitter />,
    logo: <Logo />,
    back: <Back />
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