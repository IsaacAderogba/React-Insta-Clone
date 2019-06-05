import React from "react";
import Instagram from "./instagram.png";

import "./Login.css";

class Login extends React.Component {
  

  render() {
    return (
      <div className="Login">
        <div className="InstagramPhoto">
          <img src={Instagram} alt="Instagram" />
        </div>
        <form className="LoginForm" onSubmit={this.props.onLogin}>
          <input
            placeholder="Username"
            required
            onChange={this.props.usernameInputHandler}
            value={this.props.username}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={this.props.passwordInputHandler}
            value={this.props.password}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
