import React from 'react';
import Image from 'next/image';
import FotoPerfil from '../images/foto-perfil.jpg';

const Avatar = ({ mini = false }) => {
  return (
    <div className={`up avatar${mini ? ' mini' : ''}`}>
      <Image src={FotoPerfil} alt={"Foto do autor"} />
    </div>
  )
}

export { Avatar }