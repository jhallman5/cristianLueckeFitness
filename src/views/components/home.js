/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="columns">
    <div className="column is-4">
      <figure className="column image is-128x128">
        <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/183290-200.png" />
        </figure>

    </div>
    <div className="column is-4">
      my feed
    </div>
    <div className="column is-4">
      <p><strong>Bench</strong></p>
      <p>135 / 215 </p>
      <p><strong>Squat</strong></p>
      <p>135 / 215 </p>
      <p><strong>Deadlift</strong></p>
      <p>135 / 215 </p>
      <div className="button is-info">Add PR</div>
    </div>
  </div>
);

export default Home;
