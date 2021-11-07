import { useState } from 'react';
import img from '../images/little-bee.png';
import './Bee.css';

function Bee({ linkOne, linkTwo, linkThree, introLine, text1, text2, text3 }) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div>
        <button
          onClick={() => setShow(!show)}
          type="button"
          className="button__bee"
        >
          <img src={img} alt="bee-img" className="bee__img__bottom" />
        </button>
      </div>
      <div className="bee__menu">
        {show ? (
          <nav className="bee__links">
            <h4 className="intro__bee">{introLine}</h4>
            <ul className="links__facts">
              <li className="links__item">
                {linkOne} <p className="text__fact">{text1}</p>
              </li>
              <li className="links__item">
                {linkTwo} <p className="text__fact">{text2}</p>
              </li>
              <li className="links__item">
                {linkThree} <p className="text__fact">{text3}</p>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  );
}

export default Bee;
