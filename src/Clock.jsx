import React, { Component } from 'react';

class Clock extends Component {
  constructor(props){
      super(props);
  }


  render(){
    return(
      <div> there should be our clock {this.props.time} </div>
    )
  }
}

export default Clock;
