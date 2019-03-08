import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn" onClick={props.onClick} {...props} role="button" tabIndex="0">
    <FontAwesomeIcon icon={ faTrashAlt } />
    </span>
  );
}

export default DeleteBtn;
