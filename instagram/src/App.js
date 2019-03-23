import React, { Component } from "react";
import "./App.css";

import dummyData from "./dummy-data";
import PostsPage from "./Components/PostContainer/PostsPage";

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

  render() {
    console.log("app");
    console.log(this.state.dummyData);
    return (
      <div className="container">
        <div className="App">
          <PostsPage dummyData={this.state.dummyData} />
        </div>
      </div>
    );
  }
}

export default App;
