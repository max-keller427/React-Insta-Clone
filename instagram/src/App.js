import React, { Component } from "react";
import "./App.css";

import dummyData from "./dummy-data";
import PostContainer from "./Components/PostContainer/PostContainer";
import NavBar from "./Components/NavBar/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }
  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }
  render() {
    return (
      <div className="container">
        <div className="App">
          <div>
            <NavBar />
          </div>
          <div>
            {this.state.dummyData.map((profile, index) => (
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

export default App;
