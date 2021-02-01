import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import HomePage from './Components/Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about' exact component={About} />
        <Route path='/projects' exact component={Projects} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
