import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.location.reload();
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>instagram</h1>
        <form onSubmit={this.formSubmitHandler}>
          <input
            type="text"
            placeholder="Username"
            onChange={this.inputHandler}
            value={this.state.username}
            name="username"
          />
          <input
            type="text"
            placeholder="Password"
            onChange={this.inputHandler}
            value={this.state.password}
            name="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
