import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Categories from './components/Categories.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Categories}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
