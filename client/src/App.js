import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage.js'
import CategoryPage from './components/CategoryPage.js'
import PostPage from './components/PostPage.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/category/:categoryId" component={CategoryPage} />
          <Route exact path="/post/:postId" component={PostPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
