/* eslint-disable */

import React, { Component } from 'react'; // eslint-disable-line

export default class Prs extends React.Component { // eslint-disable-line
  render() {
    return (
      <div>
        <p><strong>Bench</strong></p>
        <p>135 / 215 </p>
        <p><strong>Squat</strong></p>
        <p>135 / 215 </p>
        <p><strong>Deadlift</strong></p>
        <p>135 / 215 </p>
        <div className="button is-info">Add PR</div>
      </div>
    );
  }
}
