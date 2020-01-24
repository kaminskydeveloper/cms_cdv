import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

var isExpired = false;
if (localStorage.getItem('FBIdToken')) {
  const token = localStorage.getItem('FBIdToken').replace('Bearer ', '');
  var decodedToken = jwt.decode(token, { complete: true });
  var dateNow = new Date();

  if (decodedToken.exp < dateNow.getTime()) isExpired = true;
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isExpired && localStorage.getItem('FBIdToken') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default AuthenticatedRoute;
