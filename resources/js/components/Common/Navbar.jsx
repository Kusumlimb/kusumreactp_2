// components/Common/Navbar.js
import React from 'react';
import './Navbars.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
