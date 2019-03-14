import React from "react";
import PropTypes from "prop-types";

import CommentSection from "../CommentSection/CommentSection";

function PostContainer(props) {
  console.log(props);
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
      <div>
        <p>Add a comment...</p>
        <input type="text" />
      </div>
    </div>
  );
}

PostContainer.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
      )
    })
  )
};

export default PostContainer;
