import Beers from './Beers';
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
      <Bee
        introLine="Do you want to know more about the brewery?"
        linkOne={
          <a href="https://www.brewdog.com/uk/">
            <img src={brewdog} alt="brewdog logo" />
          </a>
        }
        text1="A link to the brewery"
        linkTwo={
          <a href="https://www.brewdog.com/blog/brewdog-columbus-and-the-end-of-history">
            <img src={beerMonth} alt="beer of the month" />
          </a>
        }
        text2="An history of the beer"
        linkThree={
          <a href="https://untappd.com/brewdogbrewery">
            <img src={untappd} alt="link to untappd" />
          </a>
        }
        text3="The brewery on our favourite social network"
      />
    </div>
  );
}

export default Brewery;
