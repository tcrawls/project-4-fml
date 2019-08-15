import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage.js'
import CategoryPage from './components/CategoryPage.js'
import PostPage from './components/PostPage.js'
import CreatePostForm from './components/CreatePostForm.js'
import EditPostForm from './components/EditPostForm.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/category/:categoryId" component={CategoryPage} />
          {/* <Route exact 
          path="/category/new" component={} /> */}
          <Route exact path="/post/:categoryId/new" component={CreatePostForm} />
          <Route exact path="/post/:categoryId/edit/:postId" component={EditPostForm} />
          <Route exact path="/post/:postId" component={PostPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
