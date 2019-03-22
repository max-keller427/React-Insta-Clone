import React from "react";
import "./CommentSection.css";
import styled from "styled-components";

const Styledh3 = styled.h3`
  font-size: 14px;
  margin-right: 5px;
  margin-top: 0;
`;

const Styledp = styled.p`
  font-size: 14px;
  margin-top: 0;
`;

function Comment(props) {
  //   console.log(props.comment.username);
  return (
    <div className="name-comment">
      <Styledh3>
        <strong>{props.comment.username}</strong>
      </Styledh3>
      <Styledp>{props.comment.text}</Styledp>
    </div>
  );
}

export default Comment;
