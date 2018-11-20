import React, { Component } from 'react';
import GridListTile from '@material-ui/core/GridListTile';

const initialState = {
  symbol: '',
  clickable: true,
  textColor: '#000000'
}

export default class Square extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    let { parentActionNotify, index } = this.props;
    return (
      <GridListTile
        cols={1}
        style={this.props.style} >
        <div style={ styles.symbol }>
          <h2 style={{ color: this.state.textColor }}>
            { this.state.symbol }
          </h2>
        </div>
      </GridListTile>
    );
  }
}

const styles = {
  symbol: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}