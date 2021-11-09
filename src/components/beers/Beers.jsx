import React, { useState } from 'react';
import axios from 'axios';
import DisplayBeer from './DisplayBeer';
import GetBeer from './GetBeer';

/* function to return random beers on top of Brewery page */

const sampleBeer = {
  image_url: 'https://images.punkapi.com/v2/24.png',
  name: 'The End Of History',
  tagline: "The World's Strongest Beer.",
  abv: '55',
};

function Beers() {
  const [beer, setBeer] = useState(sampleBeer);
  const getBeer = () => {
    axios.get('https://api.punkapi.com/v2/beers/random').then((response) => {
      setBeer(response.data[0]);
    });
  };

  return (
    <div>
      <button type="button" onClick={getBeer}>
        Another!
      </button>
      <div id="beer__of__the__month">
        <DisplayBeer beer={beer} />
      </div>
      <GetBeer />
    </div>
  );
}

export default Beers;
