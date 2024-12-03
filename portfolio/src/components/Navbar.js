import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">Sobre</Link></li>
      <li><Link to="/game">Jogo Senha</Link></li>
    </ul>
  </nav>
);

export default Navbar;