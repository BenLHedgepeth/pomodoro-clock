import React from 'react';
import './App.css';
import SetTimer from './components.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        timerActive: false,
        breakTime: 5,
        sessionTime: 25,
        secondsLeft: 0
      };
    this.incrementTime = this.incrementTime.bind(this);
    this.decrementTime = this.decrementTime.bind(this);
    this.resetTime = this.resetTime.bind(this);
    this.runTimer = this.runTimer.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // alert("componentDidUpdate is invoked!");
    let {timerActive} = this.state;
    if (timerActive && this.state.sessionTimer > 0) {
      this.ticker = setTimeout(
        () => this.tick(),
        1000
      )
    }
  }

  tick() {
    let seconds = this.state.secondsLeft;
    if (!seconds) {
      this.setState((state) => ({
        sessionTime: state.sessionTime - 1,
        secondsLeft: 60 - (state.secondsLeft + 1)
      }));
    } else {
      if (seconds > 0 && seconds <= 59) {
        this.setState((state) => ({
          secondsLeft: 60 - (state.secondsLeft + 1)
        }))
      }
    }
  }

  incrementTime(event) {
    let {sessionTime, breakTime, timerActive} = this.state;
    if (event.target.id.includes("session")) {
      this.setState((state) => {
        return !timerActive && sessionTime < 60 ? {sessionTime: state.sessionTime + 1} : false;
      });
    } else {
      this.setState((state) => {
        return !timerActive && breakTime < 60 ? {breakTime: state.breakTime + 1} : false;
      })
    }
  }

  decrementTime(event) {
    let {sessionTime, breakTime} = this.state;
    if (event.target.id.includes("session")) {
      this.setState((state) => {
        return sessionTime > 0 ? {sessionTime: state.sessionTime - 1} : false;
      });
    } else {
      this.setState((state) => {
        return breakTime > 0 ? {breakTime: state.breakTime - 1} : false;
      })
    }
  }

  resetTime(event) {
    this.setState((state) => ({
      sessionTime: 25,
      breakTime: 5
    }))
  }

  runTimer() {
    this.setState((state) => {
      return {timerActive : !state.timerActive}
    })
  }

  render() {
    let breakTimer = {name: "break", duration: this.state.breakTime};
    let sessionTimer = {name: "session", duration: this.state.sessionTime};
    return (
      <div class="main">
        <div class="timer-wrapper">
          <SetTimer timerType={breakTimer} button={[this.incrementTime, this.decrementTime]}/>
          <SetTimer timerType={sessionTimer} button={[this.incrementTime, this.decrementTime]}/>
        </div>
        <div className="clock_face">
          <div class="face_wrapper">
            <h2 id="timer-label">Session</h2>
            <h3 id="time-left">{`${this.state.sessionTime}:${formatSeconds(this.state.secondsLeft)}`}</h3>
          </div>
        </div>
        <div class="trigger_wrapper">
          <button id="start_stop" className="pause_play" onClick={this.runTimer}>
            <FontAwesomeIcon icon={faPlay} size="2x"/>
            <FontAwesomeIcon icon={faPause} size="2x"/>
          </button>
          <button id="reset" className="refresh_timer" onClick={this.resetTime}>
            <FontAwesomeIcon icon={faSyncAlt} size="2x" />
          </button>
        </div>
      </div>
    );
  }
}

function formatSeconds(second) {
  if (second < 10) {
    return `0${second}`;
  }
  return second;
}


function App() {
  return (
    <div>
      <PomodoroClock />
    </div>
  );
}

export default App;
