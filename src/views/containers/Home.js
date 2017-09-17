/* eslint-disable */
import React, { Component } from 'react'; // eslint-disable-line

import Home from '../components/home';
import UserInfo from '../components/user-info';
import Feed from './Feed';
import Prs from './Prs';

export default class HomeContainer extends React.Component { // eslint-disable-line
  render() {
    return (
      <div className="columns">
        <div className="column is-3">
          <UserInfo />
        </div>
        <div className="column is-5">
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Your Status" />
            </div>
          </div>
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
        </div>
        <div className="column is-4">
          <Prs />
        </div>
        <Home />
      </div>
    );
  }
}
