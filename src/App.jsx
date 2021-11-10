import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Brewery from './components/brewery/Brewery';
import Craft from './components/craft/Craft';
import Favourites from './components/favourites/Favourites';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import PopUp from './components/popup/PopUp';


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
        {/* <Search /> */}
      </div>
      {isAdult && <Footer />}
    </div>
  );
}

export default App;
