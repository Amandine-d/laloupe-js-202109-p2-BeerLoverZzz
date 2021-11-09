import { useState } from 'react';
import img from '../images/little-bee.png';
import './Bee.css';

function Bee({
  linkOne,
  imgOne,
  linkTwo,
  imgTwo,
  linkThree,
  imgThree,
  introLine,
  altOne,
  altTwo,
  altThree,
}) {
  const [showBee, setShowBee] = useState(false);
  return (
    <div>
      <div>
        <button
          onClick={() => setShowBee(!showBee)}
          type="button"
          className="button__bee"
        >
          <img src={img} alt="bee-img" className="bee__img__bottom" />
        </button>
      </div>
      <div className="bee__menu">
        {showBee ? (
          <nav className="bee__links">
            <h4 className="intro__bee">{introLine}</h4>
            <div className="links__facts">
              <p className="links__item">
                <a href={linkOne}>
                  <img src={imgOne} alt={altOne} className="img__bee__link" />
                </a>
              </p>
              <p className="links__item">
                <a href={linkTwo}>
                  <img src={imgTwo} alt={altTwo} className="img__bee__link" />
                </a>
              </p>
              <p className="links__item">
                <a href={linkThree}>
                  <img
                    src={imgThree}
                    alt={altThree}
                    className="img__bee__link"
                  />
                </a>
              </p>
            </div>
          </nav>
        ) : null}
      </div>
    </div>
  );
}

export default Bee;
