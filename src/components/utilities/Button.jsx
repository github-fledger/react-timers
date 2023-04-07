import React from "react";

const Button = ({ title, activeClass, _callback }) => {
  return (
    <button className={`btn ${activeClass}`} onClick={_callback}>
      {title}
    </button>
  );
};

export default Button;
