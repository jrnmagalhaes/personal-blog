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
        <a target="_blank" rel='noreferrer' href="https://twitter.com/jrnmagalhaes">
          <IconButton iconName='twitter' />
        </a>
        <a target="_blank" rel='noreferrer' href="https://www.instagram.com/ricardonmagalhaes">
          <IconButton iconName='instagram' />
        </a>
        <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/jrnmagalhaes/">
          <IconButton iconName='linkedin' />
        </a>
      </div>
    </aside>
  )
}

export { SideBar }