import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Categories from './components/Categories.js'
import SingleCategory from './components/SingleCategory.js'
import SinglePost from './components/SinglePost.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Categories}/>
          <Route exact path="/category/:categoryId" component={SingleCategory} />
          <Route exact path="/post/:postId" component={SinglePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
