import React from "react";

const Login = () => {
  let username = localStorage.setItem("username");
  let password = localStorage.setItem("jsroolz");
  return (
    <div>
      <h1>instagram</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
