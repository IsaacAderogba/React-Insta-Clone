import React from "react";
import styled from "styled-components";
import PhotoHero from "./PhotoHero";
import TextHero from "./TextHero";

import "./Login.css";

const LoginWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
`;

class Login extends React.Component {
  render() {
    return (
      <LoginWrapper>
        <PhotoHero />
        <TextHero 
          usernameInputHandler={this.props.usernameInputHandler}
          passwordInputHandler={this.props.passwordInputHandler}
          username={this.props.username}
          password={this.props.password}
          onLogin={this.props.onLogin}
        />
      </LoginWrapper>
    );
  }
}

export default Login;
