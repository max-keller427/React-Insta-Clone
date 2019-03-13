import React, { Component } from "react";
import "./App.css";

import dummyData from "./dummy-data";
import PostContainer from "./Components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
    console.log(dummyData);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Instagram</h1>
        </header>
        <div>
          {this.state.dummyData.map(profile => (
            <PostContainer profile={profile} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
