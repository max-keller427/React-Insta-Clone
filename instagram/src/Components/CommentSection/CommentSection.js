import React from "react";
import "./CommentSection.css";
import Comment from "./Comment";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    // console.log("comment section");
    // console.log(props.comments);
    this.state = {
      comments: this.props.comments,
      newCommentText: "",
      newUser: "maxkeller"
    };
  }

  // componentDidMount() {
  //   this.setState({ Comment: this.props.comment });
  // }

  inputChangeHandler = e => {
    this.setState({ newCommentText: e.target.value });
  };

  addNewComment = (e, i) => {
    e.preventDefault();
    let newCommentObj = {
      username: this.state.newUser,
      text: this.state.newCommentText
    };
    this.setState(prevState => {
      return {
        comments: [...prevState.comments, newCommentObj],
        newCommentText: "",
        newUser: "maxkeller"
      };
    });
  };
  render() {
    // console.log(this.state.comments);
    return (
      <div className="comment-section">
        {this.state.comments.map((comment, index) => (
          <Comment comment={comment} key={`${comment.username}${index}`} />
        ))}
        <div>
          <form onSubmit={this.addNewComment}>
            <input
              type="text"
              placeholder="Add a comment..."
              className="input"
              value={this.state.newCommentText}
              onChange={this.inputChangeHandler}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CommentSection;
