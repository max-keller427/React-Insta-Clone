import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";
import styled, { css } from "styled-components";
import Post from "./Post";

const PostContainer = props => {
  console.log("post container");
  console.log(props);
  return (
    <div>
      {props.dummyData.map((profile, index) => (
        <Post profile={profile} key={`${profile.username}${index}`} />
      ))}
    </div>
  );
};

export default PostContainer;
