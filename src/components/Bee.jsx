import { useState } from 'react';
import img from '../images/little-bee.png';

function Bee({ linkOne, linkTwo, linkThree, introLine }) {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <nav>
        <button onClick={handleToggle} type="button">
          {isActive ? 'close' : 'open'}
        </button>
        <img src={img} alt="bee-img" />
        <h4 className="intro__bee">{introLine}</h4>
        <p>
          You might find something interesting here:
          {linkOne}
          {linkTwo}
          {linkThree}
        </p>
      </nav>
    </div>
  );
}

export default Bee;
