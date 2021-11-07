import { useState } from 'react';
import img from '../images/little-bee.png';
import './Bee.css';

function Bee({ linkOne, linkTwo, linkThree, introLine }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div>
        <button onClick={() => setShow(!show)} type="button">
          <img src={img} alt="bee-img" className="bee__img__bottom" />
        </button>
      </div>
      <div className="bee__menu">
        {show ? (
          <nav className="bee__links">
            <h4 className="intro__bee">{introLine}</h4>
            <ul className="links__facts">
              You might find something interesting here:
              <li className="links__item">{linkOne}</li>
              <li className="links__item">{linkTwo}</li>
              <li className="links__item">{linkThree}</li>
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  );
}

export default Bee;
