import React, { Component } from 'react';
import Clock from './Clock'
import logo from './pomodoro.png';
import './App.css';

import {Form , FormControl , Button} from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clockTime : 25 ,
      inputTime : 25 ,
      clockIsRunning : 0
    }
  }

  startClock() {
      this.setState({clockIsRunning : 1 , clockTime : this.state.inputTime})
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This would be a pomodoro timer</h1>
        </header>

        <Clock
          time = {this.state.clockTime} 
          running = {this.state.clockIsRunning}
        />



        <Form inline>
                  <FormControl
                    className="time-input"
                    placeholder='How much time do you need to focus?'
                    onChange={event => this.setState({inputTime: event.target.value})}
                  />
                <Button onClick={() => this.startClock()}>
                    Start
                  </Button>
        </Form>

      </div>
    );
  }
}

export default App;
