import React from "react";

import PostContainer from "./PostContainer";
import NavBar from "../NavBar/NavBar";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: props.dummyData,
      filteredData: [],
      search: ""
    };
  }

  inputChangeHandler = e => {
    this.setState({ search: e.target.value });
  };
  filterUser = e => {
    e.preventDefault();
    // const post = this.state.dummyData.map(post => {
    //   return post.username;
    // });

    const profile = this.state.dummyData.filter(profile => {
      if (profile.username.includes(e.target.value)) {
        return profile;
      }
    });
    this.setState({ filteredData: profile });
  };
  render() {
    console.log("posts page");
    console.log(this.state.dummyData);
    return (
      <div className="container">
        <div className="App">
          <div>
            <NavBar
              // profile={this.state.dummyData}
              change={this.inputChangeHandler}
            />
          </div>
          <div>
            <PostContainer
              dummyData={
                this.state.filteredData.length > 0
                  ? this.state.filteredData
                  : this.state.dummyData
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PostsPage;
