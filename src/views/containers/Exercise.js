/* eslint-disable */

import React, { Component } from 'react';

import Set from './Set.js';

export default class Exercise extends React.Component { // eslint-disable-line
  render() {
    return (
      <div className="columns">
        <div className="column is-4">
          <div className="level-left">
            <div className="level-item">
              <strong>Exercise &#62; </strong>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <i className="fa fa-pencil" aria-hidden="true" />
            </div>
          </div>
          <div className="level">
            <div className="level-item has-text-centered">
            #
            </div>
            <div className="level-item has-text-centered">
            PREVIOUS
            </div>
            <div className="level-item has-text-centered">
            LBS
            </div>
            <div className="level-item has-text-centered">
            REPS
            </div>
          </div>
          <Set />
          <div className="level">
            <div className="level-item has-text-centered button is-info is-narrow">
              Add Set
            </div>
          </div>
        </div>
      </div>
    );
  }
}
