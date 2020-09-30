import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Metalflix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img width="150px" src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Feito com 💜 por
        {' '}
        <strong>
          <a href="https://github.com/AfonsoMachado">Afonso Machado</a>
          {' '}
          🥰
          {' '}
        </strong>
        {' '}
        Durante a Imersão React da
        {' '}
        <a href="https://www.alura.com.br/">
          <strong>
            Alura
          </strong>
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
