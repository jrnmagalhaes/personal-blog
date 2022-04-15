import React from 'react';

const Avatar = ({ mini = false }) => {
  return (
    <div className={`up avatar${mini ? ' mini' : ''}`}>
      <img src={'images/foto-perfil.jpg'} alt={"Foto do autor"} />
    </div>
  )
}

export { Avatar }