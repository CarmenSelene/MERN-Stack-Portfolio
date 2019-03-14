import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import "./SaveBtn.css"; 

function SaveBtn(props) {
  return (
    <span className="save-btn" role="button" tabIndex="0">
      <button className="saveLink" onClick={() => props.savebook(props.title, props.author, props.link)}><FontAwesomeIcon icon={faSave} /></button>
    </span>
  );
}

export default SaveBtn;
