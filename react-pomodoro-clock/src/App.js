import React from 'react';
import logo from './logo.svg';
import './App.css';
import SetTimer from './components.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPlay, faPause, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 5,
      breakTimer: {
        name: 'break',
        duration: 5
      },
      sessionTimer: {
        name: "session",
        duration: 25
      }
    };
  }

  render() {
    return (
      <div class="main">
        <div class="timer-wrapper">
          <SetTimer timerType={this.state.breakTimer}/>
          <SetTimer timerType={this.state.sessionTimer} />
        </div>
        <div className="clock_face">
          <div class="face_wrapper">
            <h2 id="timer-label">{this.state.sessionTimer.name}</h2>
            <h3>{this.state.sessionTimer.duration}</h3>
          </div>
        </div>
        <div class="trigger_wrapper">
          <button id="start_stop" className="pause_play">
            <FontAwesomeIcon icon={faPlay} size="2x"/>
            <FontAwesomeIcon icon={faPause} size="2x"/>
          </button>
          <button id="reset" className="refresh_timer">
            <FontAwesomeIcon icon={faSyncAlt} size="2x" />
          </button>
        </div>
      </div>
    );
  }
}

function shake(event) {
  event.target.classList.add("shaker");
}

function App() {
  return (
    <div>
      <PomodoroClock />
    </div>
  );
}

export default App;
