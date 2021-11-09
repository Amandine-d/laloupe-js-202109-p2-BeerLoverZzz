import Beers from '../beers/Beers';
import './Brewery.css';
import Bee from '../bee/Bee';
import brewdog from '../../images/brewdog_logo.svg';
import untappd from '../../images/untappd.png';
import beerMonth from '../../images/beer_of_the_month.jpeg';

function Brewery({ favouriteBeer, setFavouriteBeer }) {
  return (
    <div>
      <p>This is Brewery</p>
      <Beers
        favouriteBeer={favouriteBeer}
        setFavouriteBeer={setFavouriteBeer}
      />
      <Bee
        introLine="Do you want to know more about the brewery?"
        linkOne="https://www.brewdog.com/uk/"
        imgOne={brewdog}
        altOne="brewdog logo"
        linkTwo="https://www.brewdog.com/blog/brewdog-columbus-and-the-end-of-history"
        imgTwo={beerMonth}
        altTwo="beer of the month"
        linkThree="https://untappd.com/brewdogbrewery"
        imgThree={untappd}
        altThree="link to untappd"
        text3="The brewery on our favourite social network"
      />
    </div>
  );
}

export default Brewery;
