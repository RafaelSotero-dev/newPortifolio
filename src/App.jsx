import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about" component={ About }/> 
        </Switch>
    </Router>
  );
}

export default App;
