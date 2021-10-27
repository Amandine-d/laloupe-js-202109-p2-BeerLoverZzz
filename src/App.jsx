import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Brewery from './components/Brewery';
import Craft from './components/Craft';
import Favourites from './components/Favourites';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Bee from './components/Bee';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/brewery" component={Brewery} />
          <Route path="/craft" component={Craft} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Bee />
      </div>
      <Footer />
    </div>
  );
}

export default App;
