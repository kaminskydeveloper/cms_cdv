import React, { Component } from 'react';
import '../src/styles/global.sass';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home';
import about from './pages/about';
import contact from './pages/contact';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/about" component={about}></Route>
          <Route exact path="/contact" component={contact}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
