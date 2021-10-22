import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Bee from './components/Bee';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <h1>
        <Home />
        <h4 className="bee-bottom">
          <Bee />
        </h4>
      </h1>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
