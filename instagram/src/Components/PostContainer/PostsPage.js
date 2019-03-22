import React from "react";

// import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import dummyData from "../../dummy-data";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      search: ""
    };
  }
  //   componentDidMount() {
  //     this.setState({ dummyData: dummyData });
  //   }
  filterUser() {}
  render() {
    return (
      <div className="container">
        <div className="App">
          <div>
            {this.props.dummyData.map((profile, index) => (
              <PostContainer
                profile={profile}
                key={`${profile.username}${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PostsPage;
