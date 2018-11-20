import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import Square from './Square';
import Panel from './Panel';

export default class Board extends Component {

  constructor(props) {
    super(props);
    this.squares = [
      { instance: null, style: styles.squareBR },
      { instance: null, style: styles.squareBR },
      { instance: null, style: styles.squareB },
      { instance: null, style: styles.squareBR },
      { instance: null, style: styles.squareBR },
      { instance: null, style: styles.squareB },
      { instance: null, style: styles.squareR },
      { instance: null, style: styles.squareR },
      { instance: null, style: {} },
    ]
  }

  render() {
    return (
      <div>
        <div style={styles.container}>
          <GridList cellHeight={100} style={styles.gridList} cols={3}>
            {this.squares.map((square, index) => (
              <Square
                key={index}
                index={index}
                style={square.style} />
            ))}
          </GridList>
        </div>
        <Panel />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    marginTop: '20px',
    marginLeft: '10px',
    marginRight: '10px',
    padding: '10px',
  },
  squareBR: {
    borderBottom: '2px dashed #868e96',
    borderRight: '2px dashed #868e96'
  },
  squareB: {
    borderBottom: '2px dashed #868e96',
  },
  squareR: {
    borderRight: '2px dashed #868e96'
  },
  gridList: {
    width: 320,
    height: 320,
  },
};
