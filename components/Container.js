import React from 'react'

const Container = ({ children, night = false }) => {
  return (
    <div className={`container ${night ? 'night' : ''}`}>
      {children}
    </div>
  )
}

export { Container }