import Bee from './Bee';
import womenBeer from '../images/women_beer.jpg';
import brewMonk from '../images/brewMonk.png';
import hops from '../images/hops.jpeg';

function Craft() {
  return (
    <div>
      <p style={{ height: '80vh' }}>This is Craft</p>
      <Bee
        linkOne={
          <a href="https://www.smithsonianmag.com/history/women-used-dominate-beer-industry-until-witch-accusations-started-pouring-180977171/">
            <img src={womenBeer} alt="witches brewing beer" />
          </a>
        }
        text1="Want to know a bit about women and beers?"
        linkTwo={
          <a href="https://brouwland.com/fr/cuves-de-brassage-electriques/11886-brew-monk-tout-en-un-systeme-de-brassage.html">
            <img src={brewMonk} alt="brewmonk brewmaker" />
          </a>
        }
        text2="A little something that can really help you"
        linkThree={
          <a href="https://bisonbrew.com/where-to-buy-hops-online/">
            <img src={hops} alt="hops in hand" />
          </a>
        }
      />
    </div>
  );
}

export default Craft;
