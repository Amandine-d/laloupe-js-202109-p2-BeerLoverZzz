import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <section className="title">
        <h1>BEER LOVERZzz</h1>
      </section>
      <ul>
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
