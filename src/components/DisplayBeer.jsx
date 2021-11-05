import React from 'react';

const DisplayBeer = ({ beer }) => {
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
        </div>
      </div>
    )
  );
};

export default DisplayBeer;
