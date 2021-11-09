import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Brewery from './components/Brewery';
import Craft from './components/Craft';
import Favourites from './components/Favourites';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import PopUp from './components/PopUp';

function App() {
  const [isAdult, setIsAdult] = useState(false);
  const [favouriteBeer, setFavouriteBeer] = useState([]);

  return (
    <div className="App">
      {isAdult && <Header />}
      <div className="Body">
        <Switch>
          <Route exact path="/">
            <PopUp setIsAdult={setIsAdult} />
          </Route>
          {isAdult && (
            <>
              <Route path="/home" component={Home} />
              <Route path="/brewery">
                <Brewery
                  favouriteBeer={favouriteBeer}
                  setFavouriteBeer={setFavouriteBeer}
                />
              </Route>
              <Route path="/craft" component={Craft} />
              <Route path="/favourites" component={Favourites} />
              <Route path="/contact" component={Contact} />
            </>
          )}
        </Switch>
      </div>
      {isAdult && <Footer />}
    </div>
  );
}

export default App;
