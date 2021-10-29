import teamImg from '../images/drinking-team.jpg';
import barbar from '../images/barbar.png';

function Home() {
  return (
    <div>
      <h1>Who we are</h1>
      <img src={teamImg} alt="Best team" className="team__img" />
      <img src={barbar} alt="Barbar beer" className="choice" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        aspernatur quam minima voluptas eum?
      </p>
      <img src={barbar} alt="Barbar beer" className="choice" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        aspernatur quam minima voluptas eum?
      </p>
      <img src={barbar} alt="Barbar beer" className="choice" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        aspernatur quam minima voluptas eum?
      </p>
    </div>
  );
}
export default Home;
