import React from "react";
import "./CommentSection.css";

function CommentSection(props) {
  //   console.log(props);
  return (
    <div className="name-comment">
      <h3>
        <strong>{props.comment.username}</strong>
      </h3>
      <p>{props.comment.text}</p>
    </div>
  );
}

export default CommentSection;
