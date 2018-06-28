import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import About from './About';
import Timelines from './Timelines';
import TimelineForm from './TimelineForm';
import Home from './Home';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/timelines' component={Timelines} />
      <Route exact path='/timelines/add' component={TimelineForm} />
    </Switch>
  </main>

)

export default Main;
