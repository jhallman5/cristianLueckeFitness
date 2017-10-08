/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Exercise from './Exercise.js';


const mapStateToProps = state => {
  return {exercises: state.exercises}
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

class Workout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log( "=-=-=-> this.props", this.props.exercises)
    return (
      <div>
        {this.props.exercises.exercises.map((exercise, i ) => <Exercise key={i} /> )}
        <Exercise />
        <Exercise />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workout);
