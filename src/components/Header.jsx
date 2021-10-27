import { NavLink } from 'react-router-dom';
import img from '../images/title-beer-loverzzz.png';

function Header() {
  return (
    <div className="Header">
      <ul>
        <img src={img} alt="title" className="title" />
        <li>
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
      </ul>
    </div>
  );
}
export default Header;
