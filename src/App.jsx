import React, { Component } from 'react';
import Clock from './Clock'
import logo from './pomodoro.png';
import './App.css';

import {Form , FormControl , Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This would be a pomodoro timer</h1>
        </header>

        <Clock />



        <Form inline>
                  <FormControl
                    className="time-input"
                    placeholder='How much time do you need to focus?'
                    onChange={event => this.setState({newDeadline: event.target.value})}
                  />
                  <Button onClick={() => this.changeDeadline()}>
                    Submit
                  </Button>
        </Form>

      </div>
    );
  }
}

export default App;
