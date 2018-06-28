import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import About from './About';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </main>

)

export default Main;
