import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GetBeer.css';
import DisplayBeer from './DisplayBeer';

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
          .map((beer) => {
            return <DisplayBeer key={beer.id} beer={beer} />;
          })}
      </div>
    </div>
  );
}
