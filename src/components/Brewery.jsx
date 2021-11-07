import Beers from './Beers';
import like from '../images/like.png';
import './Brewery.css';
import Bee from './Bee';
import brewdog from '../images/brewdog_logo.svg';
import untappd from '../images/untappd.png';
import beerMonth from '../images/beer_of_the_month.jpeg';

function Brewery() {
  return (
    <div>
      <p>This is Brewery</p>
      <Beers />
      <button type="button" className="button__like">
        <img src={like} alt="like-button" className="button__like" />
      </button>
      <Bee
        linkOne={
          <a href="https://www.brewdog.com/uk/">
            <img src={brewdog} alt="brewdog logo" />
          </a>
        }
        linkTwo={
          <a href="https://www.brewdog.com/blog/brewdog-columbus-and-the-end-of-history">
            <img src={beerMonth} alt="beer of the month" />
          </a>
        }
        linkThree={
          <a href="https://untappd.com/brewdogbrewery">
            <img src={untappd} alt="link to untappd" />
          </a>
        }
      />
    </div>
  );
}

export default Brewery;
