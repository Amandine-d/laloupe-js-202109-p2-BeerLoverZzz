import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className="Header">
      <section className="title">
        <h1>BEER LOVERZzz</h1>
      </section>
      <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
        <ul className="navbar__links">
          <li className="navbar__items">
            <NavLink activeClassName="navbar__link" to="Home">
              Home
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink activeClassName="navbar__link" to="Brewery">
              Brewery
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink activeClassName="navbar__link" to="Favourites">
              Favourites
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink activeClassName="navbar__link" to="Craft">
              Craft
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink activeClassName="navbar__link" to="Contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <button
          className="navbar__burger"
          onClick={handleShowLinks}
          type="button"
        >
          <span className="burger-bar" />
        </button>
      </nav>
    </div>
  );
}
export default Header;
