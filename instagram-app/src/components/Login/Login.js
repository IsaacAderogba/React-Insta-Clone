import React from "react";
import Instagram from "./instagram.png";

import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  usernameInputHandler = input => {
    this.setState({
      username: input.target.value
    });
  };

  passwordInputHandler = input => {
    this.setState({
      password: input.target.value
    });
  };

  render() {
    return (
      <div className="Login">
        <div className="InstagramPhoto">
          <img src={Instagram} alt="Instagram" />
        </div>
        <form className="LoginForm">
          <input 
          placeholder="Username" 
          required 
          onChange={this.usernameInputHandler}
          value={this.state.username}
          />
          <input 
          type="password"
          placeholder="Password" 
          required 
          onChange={this.passwordInputHandler}
          value={this.state.password}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
