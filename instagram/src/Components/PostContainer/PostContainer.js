import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";

import like from "../../Img/like.PNG";
import follow from "../../Img/follow.PNG";

import CommentSection from "../CommentSection/CommentSection";

function PostContainer(props) {
  console.log(props);
  return (
    <div className="post-container">
      <div className="post-header">
        <h2>{props.profile.username}</h2>
        <img src={props.profile.thumbnailUrl} alt="Profile" />
      </div>
      <div className="post">
        <img src={props.profile.imageUrl} alt="Post" />
      </div>
      <div className="dynamic">
        <div>
          <img src={like} className="like" />
          <img src={follow} className="follow" />
        </div>
        <p>{props.profile.likes} likes</p>
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
