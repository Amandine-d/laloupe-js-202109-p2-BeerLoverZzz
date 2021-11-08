import React from 'react';

function BeerItem(img, name, description, tagline) {
  return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          <img src={img} alt="beer" />
        </div>
        <div className="itemDescription">
          <h4>{name}</h4>
          <p>{description}</p>
          <p>{tagline}</p>
        </div>
      </div>
    </div>
  );
}

export default BeerItem;
