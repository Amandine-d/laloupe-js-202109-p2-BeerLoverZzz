import React, { useState } from 'react';

function BeerItem(img, name, description, tagline) {
  const [favourite, setFavourite] = useState(false);
  const handleClickFavourite = () => setFavourite(!favourite);
  const handleKeyUp = () => setFavourite(!favourite);

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
      <button
        id="favourite"
        onClick={handleClickFavourite}
        onKeyUp={handleKeyUp}
        type="button"
        aria-label="save"
        className={favourite ? 'isFavourite' : 'notFavourite'}
      />
    </div>
  );
}

export default BeerItem;
