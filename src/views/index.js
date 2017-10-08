/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './containers/Home';
import Workout from './containers/Workout';
import store from './store';
import Nav from './components/nav';

const App = () => (
  <BrowserRouter >
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/workout" component={Workout} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'));
