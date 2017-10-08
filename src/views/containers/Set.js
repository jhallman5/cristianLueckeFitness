/* eslint-disable */

import React, { Component } from 'react'; // eslint-disable-line

export default class Set extends React.Component { // eslint-disable-line
  render() {
    return (
      <div className="columns">
        <div className="column  is-offset-1 is-1 has-text-centered">
        1
        </div>
        <div className="column has-text-centered">
          <input type="text" placeholder="No Previous value" />
        </div>
        <div className="column has-text-centered">
          <input type="text" />
        </div>
        <div className="column has-text-centered">
          <input type="text" placeholder="10" />
        </div>
      </div>
    );
  }
}
