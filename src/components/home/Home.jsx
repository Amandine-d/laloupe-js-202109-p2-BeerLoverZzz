import teamImg from '../../images/drinking-team.jpg';
import barbar from '../../images/barbar.png';
import './home.css';
import Bee from '../bee/Bee';
import breweryOne from '../../images/BreweryOne.jpeg';

function Home() {
  return (
    <div className="home__page">
      <div className="presentation__team">
        <h1>Who we are</h1>
        <img src={teamImg} alt="Best team" className="team__img" />
        <p className="team__text__home">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          laborum enim eveniet voluptatibus magnam ipsa doloremque tempora unde
          esse excepturi iusto, pariatur consequatur corrupti sit architecto
          animi dignissimos, nihil voluptas?
        </p>
      </div>
      <div className="team__beers">
        <h5>Some of our amazing choices</h5>
        <div className="choice__team__home">
          <img src={barbar} alt="Barbar beer" className="choice__beer__img" />
          <p className="text__beer__home">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis aspernatur quam minima voluptas eum?
          </p>
        </div>
        <div className="choice__team__home">
          <img src={barbar} alt="Barbar beer" className="choice__beer__img" />
          <p className="text__beer__home">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis aspernatur quam minima voluptas eum?
          </p>
        </div>
        <div className="choice__team__home">
          <img src={barbar} alt="Barbar beer" className="choice__beer__img" />
          <p className="text__beer__home">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis aspernatur quam minima voluptas eum?
          </p>
        </div>
      </div>
      <Bee
        introLine="If you see me at the bottom of a page don't hesitate to click on me, I have so much to say"
        linkOne="https://www.brasserielefebvre.be/beer/honeybeer-barbar-blonde-export/"
        imgOne={breweryOne}
        altOne="link for brewery"
      />
    </div>
  );
}
export default Home;
