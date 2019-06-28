import React, { Component } from 'react';
import Board from './components/Board.jsx';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <Board />
      </div>
    )
  }
}

export default App;