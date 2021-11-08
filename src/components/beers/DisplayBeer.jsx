import React, { useState } from 'react';
import like from '../../images/like.png';
import './DisplayBeer.css';

const DisplayBeer = ({ beer }) => {
  const [favourite, setFavourite] = useState(false);
  const handleClickFavourite = () => setFavourite(!favourite);
  const handleKeyUp = () => setFavourite(!favourite);
  return (
    beer && (
      <div className="card__beer">
        <div className="beer__left">
          <img
            src={beer.image_url}
            alt={beer.name}
            className="beer__left__img"
          />
          <p className="beer__name__abv">{beer.abv}</p>
        </div>
        <div className="beer__right">
          <h3 className="beer__right__name">{beer.name}</h3>
          <p className="beer__right__ibu">{beer.ibu}</p>
          <p className="beer__right__tagline">{beer.tagline}</p>
          <p className="beer__right__description">{beer.desription}</p>
          <button
            id="button__like"
            onClick={handleClickFavourite}
            onKeyUp={handleKeyUp}
            type="button"
            aria-label="save"
            className={favourite ? 'isFavourite' : 'notFavourite'}
          >
            <img src={like} alt="like button" className="button__like" />
          </button>
        </div>
      </div>
    )
  );
};

export default DisplayBeer;
