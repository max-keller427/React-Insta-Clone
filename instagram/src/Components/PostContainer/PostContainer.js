import React from "react";

function PostContainer(props) {
  return (
    <div>
      <h2>{props.profile.username}</h2>
      <img src={props.profile.imageUrl} />
    </div>
  );
}

export default PostContainer;
