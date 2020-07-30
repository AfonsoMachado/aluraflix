import React from 'react';
import Logo from '../../assets/img/devflix.png'
import './Menu.css';
// import ButtonLink from './ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Devflix Logo" />
      </a>
      {/* Button usando srtled-componentes, se comportando como um a */}
      <Button as="a" className="ButtonLink" href="/">
        {/* children */}
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu;