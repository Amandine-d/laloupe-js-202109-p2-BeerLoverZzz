import { NavLink } from 'react-router-dom';
import imgTitle from '../images/title-beer-loverzzz.png';
import imgLogo from '../images/bee-logo.png';
import imgMenu from '../images/burger.png';

function Header() {
  return (
    <div className="Header">
      <img src={imgLogo} alt="logo" className="logo" />
      <nav className="navbar">
        <ul>
          <img src={imgTitle} alt="title" className="title" />
          <li className="nav-item">
            <NavLink activeClassName="Home selected" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="Brewery selected" to="Brewery">
              Brewery
            </NavLink>
            <NavLink activeClassName="Favourites selected" to="Favourites">
              Favourites
            </NavLink>
            <NavLink activeClassName="Craft selected" to="Craft">
              Craft
            </NavLink>
            <NavLink activeClassName="Contact selected" to="Contact">
              Contact
            </NavLink>
          </li>
          <img src={imgMenu} alt="burger-menu" className="burgerMenu" />
        </ul>
      </nav>
    </div>
  );
}
export default Header;
