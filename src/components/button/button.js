import React from "react";


function Button(props) {
  return (
    <button
      className={props.className}
      onClick={props.handleClick}
      disabled={props.disabled}
      id={props.id}
    >
      <img height="50px" width="50px" src={props.imageUrl}
       alt={props.text} />
      {props.children}
    </button>
  );
}

export default Button;