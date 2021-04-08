import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Gallery from './Pages/Gallery/Gallery'
import Home from './Pages/Home/Home'


function App() {

  return (
    <div className="App">
        <Router>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={Gallery}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
