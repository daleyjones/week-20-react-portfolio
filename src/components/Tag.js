import React from "react";

function Tag({ text }) {
  return (
    <span className="badge badge-primary mr-2">{text}</span>
  );
}

export default Tag;
