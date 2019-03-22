import React from "react";
import "./CommentSection.css";

function Comment(props) {
  //   console.log(props.comment.username);
  return (
    <div className="name-comment">
      <h3>
        <strong>{props.comment.username}</strong>
      </h3>
      <p>{props.comment.text}</p>
    </div>
  );
}

export default Comment;
