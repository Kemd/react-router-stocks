// Route
import { Route } from 'react-router-dom'
import './App.css';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Stock from './pages/Stock';
import stocks from './stocks-data';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/stocks'>
        <Dashboard />
      </Route>

      <Route path='/stocks/:symbol' render={(renderProps) => {
        return <Stock {...renderProps} />
      }}/>

    </div>
  );
}

export default App;
