import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage.js'
import CategoryPage from './components/CategoryPage.js'
import PostPage from './components/PostPage.js'
import CreatePostForm from './components/CreatePostForm.js'
import EditPostForm from './components/EditPostForm.js'
import CreateCommentForm from './components/CreateCommentForm.js'
import EditCommentForm from './components/EditCommentForm.js'
import SelectCategoryList from './components/SelectCategoryList.js'
import CreateCategoryForm from './components/CreateCategoryForm.js'


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/category/new" component={CreateCategoryForm} />
          <Route exact path="/category/select" component={SelectCategoryList} />
          <Route exact path="/category/:categoryId" component={CategoryPage} />
          <Route exact path="/post/:categoryId/new" component={CreatePostForm} />
          <Route exact path="/post/:categoryId/edit/:postId" component={EditPostForm} />
          <Route exact path="/post/:postId" component={PostPage} />
          <Route exact path="/comment/:postId/new" component={CreateCommentForm} />
          <Route exact path="/comment/:postId/edit/:commentId" component={EditCommentForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
