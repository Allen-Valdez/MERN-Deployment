import './App.css';
import { Router, Link } from '@reach/router';
import { AddPirate } from './components/AddPirate';
import { Home } from './components/Home';
import { Pirates } from './components/Pirates';
import { PirateDetails } from './components/PirateDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/' />
        <Pirates path='/pirates' />
        <AddPirate path= "/pirate/new"/>
        <PirateDetails path='/pirate/:id'/>
      </Router>
    </div>
  );
}

export default App;

