import React, { useState } from 'react';
import like from '../../images/like.png';
import dislike from '../../images/dislike.png';
import './DisplayBeer.css';

const DisplayBeer = ({ beer, favouriteBeer, setFavouriteBeer }) => {
  const [favourite, setFavourite] = useState(false);
  console.log(favouriteBeer);
  const handleClickFavourite = () => {
    setFavourite(!favourite);
    const check = favouriteBeer?.includes(beer.id);
    if (check) {
      const index = favouriteBeer.indexOf(`${beer.id}`);
      const updateFavorite = [...favouriteBeer];
      updateFavorite.splice(index, 1);
      setFavouriteBeer(updateFavorite);
    } else {
      const updateFavorite = [...favouriteBeer];
      updateFavorite.push(beer.id);
      setFavouriteBeer(updateFavorite);
    }
  };

  return (
    <>
      {beer && (
        <div className="card__beer">
          <div className="beer__left">
            <img
              src={beer.image_url}
              alt={beer.name}
              className="beer__left__img"
              key={beer.id}
            />
            <p className="beer__name__abv">{beer.abv}</p>
          </div>
          <div className="beer__right">
            <h3 className="beer__right__name">{beer.name}</h3>
            <p className="beer__right__ibu">{beer.ibu}</p>
            <p className="beer__right__tagline">{beer.tagline}</p>
            <p className="beer__right__description">{beer.desription}</p>
            <div>
              <button
                id="favourite"
                className="button__favourite"
                onClick={handleClickFavourite}
                aria-label="fav"
                type="button"
              >
                {favourite ? (
                  <img
                    src={like}
                    alt="like"
                    className="button__like"
                    key={beer.id}
                  />
                ) : (
                  <img
                    src={dislike}
                    alt="dislike"
                    className="button__like"
                    key={beer.id}
                  />
                )}
              </button>
              {console.log(beer.name)}
              {console.log('I am dislike')}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayBeer;
