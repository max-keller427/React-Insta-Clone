import React from "react";

function CommentSection(props) {
  //   console.log(props);
  return (
    <div>
      <h3>{props.comment.username}</h3>
      <p>{props.comment.text}</p>
    </div>
  );
}

export default CommentSection;
