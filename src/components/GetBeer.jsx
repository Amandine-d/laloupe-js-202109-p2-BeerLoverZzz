import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GetBeer.css';

export default function GetBeer() {
  const [beerList, setBeerList] = useState([]);
  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers').then((response) => {
      setBeerList(response.data);
    });
  }, []);
  const [strongBeer, setStrongBeer] = useState(false);
  const handleStrong = () => setStrongBeer(!strongBeer);
  const [bitterBeer, setBitterBeer] = useState(false);
  const handleBitter = () => setBitterBeer(!bitterBeer);

  return (
    <div className="main__container">
      <button onClick={handleStrong} type="button">
        Give me strong beer
      </button>
      <button onClick={handleBitter} type="button">
        I like it bitter
      </button>
      <div className="card__list">
        {beerList
          .filter((strong) => (strongBeer ? strong.abv > 6 : strong))
          .filter((bitter) => (bitterBeer ? bitter.ibu > 50 : bitter))
          .map((list) => {
            return (
              <div className="card__beer">
                <div className="beer__left">
                  <img
                    src={list.image_url}
                    alt="beer"
                    className="beer__left__img"
                  />
                  <p className="beer__name__abv">{list.abv}</p>
                </div>
                <div className="beer__right">
                  <h3 className="beer__right__name">{list.name}</h3>
                  <p className="beer__right__ibu">{list.ibu}</p>
                  <p className="beer__right__tagline">{list.tagline}</p>
                  <p className="beer__right__description">{list.desription}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
