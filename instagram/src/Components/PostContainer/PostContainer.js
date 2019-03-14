import React from "react";

import CommentSection from "../CommentSection/CommentSection";

function PostContainer(props) {
  // console.log(props);
  return (
    <div>
      <div>
        <h2>{props.profile.username}</h2>
        <img src={props.profile.imageUrl} />
      </div>
      <div>
        {props.profile.comments.map(comment => (
          <CommentSection comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default PostContainer;
