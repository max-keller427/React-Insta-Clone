import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";
import styled, { css } from "styled-components";

import like from "../../Img/like.PNG";
import comment from "../../Img/comment.PNG";

import CommentSection from "../CommentSection/CommentSection";

const PostHeaderh2 = styled.h2`
  order: 1;
  font-size: 15px;
  margin-left: 2%;
`;

const PostImg = styled.img`
  width: 10px;
  height: 10px;
`;

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.profile.likes,
      liked: false
    };
  }
  addLikes = (e, i) => {
    e.preventDefault();
    // let newLikes = {
    //   likes: this.state.likes
    // };
    this.setState(prevState => {
      return {
        likes: prevState.liked ? prevState.likes - 1 : prevState.likes + 1,
        liked: !prevState.liked
      };
    });
  };
  render() {
    // console.log("post container");
    // console.log(this.props.profile.username);
    return (
      <div className="post-container">
        <div className="post-header">
          <PostHeaderh2>{this.props.profile.username}</PostHeaderh2>
          <PostImg src={this.props.profile.thumbnailUrl} alt="Profile" />
        </div>
        <div className="post">
          <img src={this.props.profile.imageUrl} alt="Post" />
        </div>
        <div className="dynamic">
          <div>
            <a href="#" onClick={this.addLikes}>
              <img src={like} className="like" />
            </a>
            <a href="">
              <img src={comment} className="comment" />
            </a>
          </div>
          <p>
            <strong>{this.state.likes} likes</strong>
          </p>
          <CommentSection comments={this.props.profile.comments} />
        </div>
      </div>
    );
  }
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
