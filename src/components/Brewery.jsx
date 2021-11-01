import Beers from './Beers';
import like from '../images/like.png';
import './Brewery.css';

function Brewery() {
  return (
    <div>
      <p>This is Brewery</p>
      <Beers />
      <button type="button" className="button__like">
        <img src={like} alt="like-button" className="button__like" />
      </button>
    </div>
  );
}

export default Brewery;
