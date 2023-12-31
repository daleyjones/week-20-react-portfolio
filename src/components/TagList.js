import React from "react";
import Tag from "./Tag";
import '../App.css';

function TagList({ tags }) {
  return (
    <div className="mb-3">
      {tags.map((tag, index) => (
        <Tag key={index} text={tag} />
      ))}
    </div>
  );
}

export default TagList;
