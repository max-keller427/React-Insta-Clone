import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";

import like from "../../Img/like.PNG";
import comment from "../../Img/comment.PNG";

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
          <a href="">
            <img src={like} className="like" />
          </a>
          <a href="">
            <img src={comment} className="comment" />
          </a>
        </div>
        <p>
          <strong>{props.profile.likes} likes</strong>
        </p>
        {props.profile.comments.map(comment => (
          <CommentSection comment={comment} />
        ))}
      </div>
      <div>
        <input type="text" placeholder="Add a comment..." className="input" />
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
