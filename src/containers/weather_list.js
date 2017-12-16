import React, { Component } from 'react';
import { connect } from 'react-redux';
export default class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state){
//   return {weather: state.weather}
// }
// // Using ES6 syntax, since we are pulling from state, the variable weather, we could use
// // { weather }

// function mapStateToProps({ weather }){
//   return {weather: weather}
// }

// But now, since you have weather : weather,
// you can even more refactor just one weather -- ULTIMATE REFACTORING!
// This is possible where you have the key and value completely identical.

function mapStateToProps({ weather }){
  return { weather }
}
