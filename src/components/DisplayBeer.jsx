import React from 'react';

const DisplayBeer = ({ beer }) => {
  return (
    beer && (
      <div className="Card">
        <img src={beer.image_url} alt={beer.name} />
        <div>
          <p>Name: {beer.name}</p>
          <p>Tagline: {beer.tagline}</p>
        </div>
      </div>
    )
  );
};

export default DisplayBeer;
