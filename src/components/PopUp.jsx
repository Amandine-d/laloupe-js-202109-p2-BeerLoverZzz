import { useHistory } from 'react-router-dom';
import './PopUp.css';

function PopUp({ setIsAdult }) {
  const history = useHistory();
  function handleIsAdult() {
    setIsAdult(true);
    history.push('/home');
  }

  return (
    <div className="PopUp">
      <section className="Welcome">
        <h2>Welcome !</h2>
        <br />
        <br />
        <h3>
          To access this site, do you confirm that you are of legal drinking age
          in your country of residence?
        </h3>
        <br />
        <br />
        <div className="grpButton">
          <button className="button" type="button" onClick={handleIsAdult}>
            Yes
          </button>
          <a href="https://google.com">
            <button
              className="button"
              type="button"
              onClick={() => setIsAdult(false)}
            >
              No
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default PopUp;
