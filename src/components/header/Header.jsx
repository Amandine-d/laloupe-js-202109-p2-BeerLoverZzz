import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/bee-logo.png';

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div>
      <div className="Header">
        <img src={logo} alt="bee-logo" id="bee__logo" />
        <section className="title">
          <h1>BEER LOVERZzz</h1>
        </section>
        <div>
          <nav>
            {showLinks ? (
              <div>
                <ul className="navbar__links">
                  <li className="navbar__items">
                    <NavLink
                      activeClassName="navbar__link"
                      to="Home"
                      className="navlink__header"
                      onClick={handleShowLinks}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="navbar__items">
                    <NavLink
                      activeClassName="navbar__link"
                      to="Brewery"
                      className="navlink__header"
                      onClick={handleShowLinks}
                    >
                      Brewery
                    </NavLink>
                  </li>
                  <li className="navbar__items">
                    <NavLink
                      activeClassName="navbar__link"
                      to="Favourites"
                      className="navlink__header"
                      onClick={handleShowLinks}
                    >
                      Favourites
                    </NavLink>
                  </li>
                  <li className="navbar__items">
                    <NavLink
                      activeClassName="navbar__link"
                      to="Craft"
                      className="navlink__header"
                      onClick={handleShowLinks}
                    >
                      Craft
                    </NavLink>
                  </li>
                  <li className="navbar__items">
                    <NavLink
                      activeClassName="navbar__link"
                      to="Contact"
                      className="navlink__header"
                      onClick={handleShowLinks}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : null}
            <button
              className="navbar__burger"
              onClick={handleShowLinks}
              type="button"
            >
              <span className="burger-bar" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Header;
