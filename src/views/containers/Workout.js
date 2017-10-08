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

  render() {
    return (
      <div>
        {this.props.exercises.exercises.map((exercise, i ) => {
          console.log( "=-=-=-> i", i )
        return <Exercise key={i} name={this.props.exercises.exercises[i]}/>
      })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workout);
