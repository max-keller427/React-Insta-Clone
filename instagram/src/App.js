import React, { Component } from "react";
import "./App.css";

import dummyData from "./dummy-data";
import NavBar from "./Components/NavBar/NavBar";
import PostsPage from "./Components/PostContainer/PostsPage";
import withAuthenticate from "../src/Authentication/withAuthenticate";
import Login from "./Components/Login/Login";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);
class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      search: ""
    };
  }
  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }
  inputChangeHandler(e) {
    this.setState({ search: e.target.value });
  }

  filterUser() {}
  render() {
    return (
      <div className="container">
        <div className="App">
          <div>
            <NavBar
              profile={this.state.dummyData}
              change={this.inputChangeHandler}
            />
          </div>
          <PostsPage dummyData={this.state.dummyData} />
        </div>
      </div>
    );
  }
}

export default App;
