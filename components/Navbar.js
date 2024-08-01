import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/">
          <img src="/logo.png" alt="Site Logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="https://drawing.garden">Bahçe Çiz</a></li>
        <li><a href="https://cat-bounce.com/">Kedi Zıplat</a></li>
        <li><a href="http://www.ismycomputeron.com/">IT'ci</a></li>
      </ul>
      <div className="navbar-underline"></div>
    </nav>
  );
};

export default Navbar;
