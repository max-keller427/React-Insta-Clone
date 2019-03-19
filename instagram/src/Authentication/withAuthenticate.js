import React from "react";

const withAuthenticate = One => Two => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      const username = localStorage.getItem("username");
      const password = localStorage.getItem("password");
      //   {
      //     username === "maxkeller" && password === "jsroolz" ? <One /> : <Two />;
      //   }
      if (username === "maxkeller" && password === "jsroolz") {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      if (this.state.loggedIn === true) {
        return <One />;
      }
    }
  };
};

export default withAuthenticate;
