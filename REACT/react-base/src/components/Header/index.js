import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const botaoClidado = useSelector((state) => state.exemplo.botaoClidado);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/outracoisa">
        <FaSignInAlt size={24} />
      </Link>
      {botaoClidado ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}
