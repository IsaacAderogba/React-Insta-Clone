import React from "react";
import Login from "../components/Login/Login";

const withAuthenticate = App => {
  return class extends React.Component {
    constructor() {
      super();

      let isLoggedIn = false;
      let nameOfUser = "";

      if (localStorage.length >= 1) {
        for (let i = 0; i < localStorage.length; i++) {
          if (window.localStorage.getItem("username")) {
            console.log("success");
            isLoggedIn = true;
            nameOfUser = window.localStorage.getItem("username");
          }
        }
      }

      this.state = {
        username: nameOfUser ? nameOfUser : "",
        password: "",
        isLoggedIn: isLoggedIn ? isLoggedIn : false
      };

      console.log(this.state.username, this.state.isLoggedIn);
    }

    onLogin = event => {
      localStorage.setItem("username", this.state.username);
    };

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
      if (!this.state.isLoggedIn) {
        return (
          <Login
            usernameInputHandler={this.usernameInputHandler}
            passwordInputHandler={this.passwordInputHandler}
            username={this.state.username}
            password={this.state.password}
            onLogin={this.onLogin}
          />
        );
      }
      return <App {...this.props} username={this.state.username} />;
    }
  };
};

export default withAuthenticate;
