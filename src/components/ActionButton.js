import React from 'react';
import '../Styles/ActionButton.css';

function ActionButton(props) {
  return <button className={props.nameOfClass}>{props.text}</button>;
}

export default ActionButton;
