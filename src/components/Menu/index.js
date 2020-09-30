import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Metalflix.png';
import './Menu.css';
// import ButtonLink from './ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      {/* Funciona como uma tag a, mas para um spa */}
      <Link to="/">
        <img className="Logo" src={Logo} alt="Devflix Logo" />
      </Link>
      {/* Button usando srtled-componentes, se comportando como um a */}
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        {/* children */}
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
