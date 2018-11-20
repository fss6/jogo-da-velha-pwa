import React, { Component } from 'react';
import Board from './Board';

const initialState = {
  symbol: 'X',
  plays: 0,
  xIsCurrentSymbol: true
}

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}