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
            <NavLink
              activeClassName="navbar__link"
              to="Home"
              className="navlink__header"
            >
              Home
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink
              activeClassName="navbar__link"
              to="Brewery"
              className="navlink__header"
            >
              Brewery
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink
              activeClassName="navbar__link"
              to="Favourites"
              className="navlink__header"
            >
              Favourites
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink
              activeClassName="navbar__link"
              to="Craft"
              className="navlink__header"
            >
              Craft
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink
              activeClassName="navbar__link"
              to="Contact"
              className="navlink__header"
            >
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
