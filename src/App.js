import React, { Component } from 'react';
import '../src/styles/global.sass';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home';
import about from './pages/about';
import contact from './pages/contact';
import login from './pages/login';
import dashboard from './pages/dashboard';
import articles from './pages/dashboard/articles';
import users from './pages/users';
import article from './pages/article';
import addArticle from './pages/dashboard/addArticle';
import editPost from './pages/dashboard/editPost';

import AuthenticatedRoute from './utils/AuthenticatedRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/about" component={about}></Route>
          <Route exact path="/contact" component={contact}></Route>
          <Route exact path="/login" component={login}></Route>
          <AuthenticatedRoute
            exact
            path="/dashboard"
            component={dashboard}
          ></AuthenticatedRoute>
          <Route exact path="/dashboard/articles" component={articles}></Route>
          <Route exact path="/users" component={users}></Route>
          <Route exact path="/article/:id" component={article}></Route>
          <Route
            exact
            path="/dashboard/addarticle"
            component={addArticle}
          ></Route>
          <Route
            exact
            path="/dashboard/editPost/:id"
            component={editPost}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
