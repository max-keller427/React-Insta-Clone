import React, { Component } from "react";
import "./App.css";

import dummyData from "./dummy-data";
import NavBar from "./Components/NavBar/NavBar";
import PostsPage from "./Components/PostContainer/PostsPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      filteredData: [],
      search: ""
    };
  }
  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }
  inputChangeHandler = e => {
    this.setState({ search: e.target.value });
  };

  filterUser = e => {
    e.preventDefault();
    this.state.dummyData.map(post => {
      post.filter(profile => {
        if (profile.username.includes(e.target.value)) {
          this.setState({ filteredData: profile });
        }
      });
    });
  };
  render() {
    // console.log("app");
    // console.log(this.state.dummyData.username);
    return (
      <div className="container">
        <div className="App">
          <div>
            <NavBar
              profile={this.state.dummyData}
              change={this.inputChangeHandler}
            />
          </div>
          {
            <PostsPage
              dummyData={
                this.state.filteredData.length > 0
                  ? this.state.filteredData
                  : this.state.dummyData
              }
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
