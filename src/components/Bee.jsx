import { useState } from 'react';
import img from '../images/little-bee.png';
import './Bee.css';

function Bee({ linkOne, linkTwo, linkThree, introLine }) {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <div>
        <button onClick={handleToggle} type="button">
          <img src={img} alt="bee-img" className="bee__img__bottom" />
        </button>
      </div>
      <div className={isActive ? 'close__bee__menu' : 'open__bee__menu'}>
        <nav className="bee__links">
          <h4 className="intro__bee">{introLine}</h4>
          <p>
            You might find something interesting here:
            {linkOne}
            {linkTwo}
            {linkThree}
          </p>
        </nav>
      </div>
    </div>
  );
}

export default Bee;
