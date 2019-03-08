import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import "./SaveBtn.css";

function SaveBtn(props) {
  const title = props.volumeinfo.title;
  console.log(title);
  const author = [props.volumeinfo.authors];
  console.log(author);
  const link = [props.volumeinfo.previewLink];
  console.log(link);
  return (
    <span className="save-btn" role="button" tabIndex="0">
      <button className="saveLink" onClick={() => { props.savebook(title, author, link) }}><FontAwesomeIcon icon={faSave} /> </button>
    </span>
  );
}

export default SaveBtn;
