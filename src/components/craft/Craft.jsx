import Bee from '../bee/Bee';
import womenBeer from '../../images/women_beer.jpg';
import brewMonk from '../../images/brewMonk.png';
import hops from '../../images/hops.jpeg';

function Craft() {
  return (
    <div>
      <p style={{ height: '80vh' }}>This is Craft</p>
      <Bee
        linkOne="https://www.smithsonianmag.com/history/women-used-dominate-beer-industry-until-witch-accusations-started-pouring-180977171/"
        imgOne={womenBeer}
        altOne="witches brewing beer"
        linkTwo="https://brouwland.com/fr/cuves-de-brassage-electriques/11886-brew-monk-tout-en-un-systeme-de-brassage.html"
        imgTwo={brewMonk}
        altTwo="brewmonk brewmaker"
        linkThree="https://bisonbrew.com/where-to-buy-hops-online/"
        imgThree={hops}
        altThree="hops in hand"
      />
    </div>
  );
}

export default Craft;
