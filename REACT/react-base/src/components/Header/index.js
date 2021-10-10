import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="1">
        <FaHome size={24} />
      </a>
      <a href="1">
        <FaUserAlt size={24} />
      </a>
      <a href="1">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
