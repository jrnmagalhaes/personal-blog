import React from 'react';
import { Avatar } from './Avatar';
import { IconButton } from './IconButton';

const SideBar = () => {
  return (
    <aside>
      <Avatar />
      <div>
        <h6>Ricardo Nogueira <br /> <small>Desenvolvedor de software</small></h6>
        <p>
          <i>
            Estou fazendo esse blog para formalizar meus estudos e projetos pessoais.
            <br />Por favor, não presuma que tudo que está escrito aqui está certo.
          </i>
        </p>
      </div>
      <div className='icon-container'>
        <IconButton iconName='instagram' />
        <IconButton iconName='twitter' />
        <IconButton iconName='linkedin' />
      </div>
    </aside>
  )
}

export { SideBar }