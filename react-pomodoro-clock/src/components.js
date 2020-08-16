import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function SetTimer(props) {
  let timer = props.timerType;
  return (
    <div className="adjust_timer">
      <p id={`${timer.name}-label`}>{timer.name.replace(timer.name[0], timer.name[0].toUpperCase())} Length</p>
      <div className="timer-setting-wrapper">
        <button id={`${timer.name}-increment`}>
          <FontAwesomeIcon icon={faArrowUp} size="2x"/>
        </button>
        <p id={`${timer.name}-length`} className="timer-name">{timer.duration}</p>
        <button id={`${timer.name}-decrement`}>
          <FontAwesomeIcon icon={faArrowDown} size="2x"/>
        </button>
      </div>
    </div>
  )
}
