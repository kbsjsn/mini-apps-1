import React, { Component } from 'react';
import Square from './square.jsx';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: Array(6).fill(null).map(ele => ele = Array(7).fill(null)), // values[row][col]
      turn: true
    }

    this.handleClick = this.handleClick.bind(this);
    this.renderSquare = this.renderSquare.bind(this);
    this.renderBoard = this.renderBoard.bind(this);
  }

  //clicking a column will first fill board[5, col]
  //square component will have 

  //player clicks column,
  //for given column, check each row if there are pieces near the bottom, 
  //for given column, fill highest !null row

  //red player goes first, 
  handleClick(row, col) {
    let valuesCopy = this.state.values.slice().slice();
    let rowToFill = null;
    for (let i = 0; i < 6; i++) {
      if (valuesCopy[i][col] === null) {
        rowToFill = i;
      } else {
        break;
      }
    }

    let color = this.state.turn ? 'red' : 'blue';
    let next = this.state.turn ? false : true;
    this.setState({turn: next})

    valuesCopy[rowToFill][col] = color;
    this.setState({values: valuesCopy})

  }

  //give each square an index in form of array [row, col]
  renderSquare(row, col, key) {
    return(
      <Square value={this.state.values[row][col]} onClick={() => this.handleClick(row, col)} key={key} />
    )
    
    // for(var row = 0; row < 6; row++) {
    //   for(var col = 0; col < 7; col++) {
    //     <Square index={[row, col]} onClick={this.handleClick(index)} value={this.props.value} />

    //   }
    // }
  }

  // array "board" has the values of piece. 
  // render board onto DOM by adding 
  renderBoard() {
    let board = Array(6).fill(null).map(ele => ele = Array(7).fill(null));
    return( //***** fix key to reflect unique val
      <div>
      <div id="0">{board[0].map((col, j) => this.renderSquare(0, j, j))}</div>
      <div id="1">{board[1].map((col, j) => this.renderSquare(1, j, j))}</div>
      <div id="2">{board[2].map((col, j) => this.renderSquare(2, j, j))}</div>
      <div id="3">{board[3].map((col, j) => this.renderSquare(3, j, j))}</div>
      <div id="4">{board[4].map((col, j) => this.renderSquare(4, j, j))}</div>
      <div id="5">{board[5].map((col, j) => this.renderSquare(5, j, j))}</div>
      </div>
      // board.map((row, i) => row.map((col, j) => this.renderSquare(i, j, j))) 
    )
  }

  render() {
    return(
      <div>
        Hola
        {this.renderBoard()}
      </div>
    )
  }
}

export default Board;