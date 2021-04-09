import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Gallery from './Pages/Gallery/Gallery'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'


function App() {

  return (
    <div className="App">
        <Router>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={Gallery}/>
            <Route path="/contact" component={Contact}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
