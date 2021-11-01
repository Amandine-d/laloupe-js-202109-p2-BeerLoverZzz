import React, { useState } from 'react';
import axios from 'axios';
import DisplayBeer from './DisplayBeer';

const sampleBeer = {
  image_url: 'https://images.punkapi.com/v2/2.png',
  name: 'Trashy Blonde',
  tagline: "You Know You Shouldn't",
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
        New Beer
      </button>
      <DisplayBeer beer={beer} setBeer={setBeer} />
    </div>
  );
}

export default Beers;
