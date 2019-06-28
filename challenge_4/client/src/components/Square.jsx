import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return(
      <button onClick={this.props.onClick} >
        {this.props.value}
      </button>
    )
  }
}

export default Square;