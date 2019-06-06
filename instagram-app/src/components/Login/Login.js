import React from "react";
import styled from "styled-components";
import PhotoHero from "./PhotoHero";
import TextHero from "./TextHero";
import Header from "./Header";
import Footer from "./Footer";

import "./Login.css";

const BackgroundWrapper = styled.div`
  background-color: #fafafa;
`;

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
      <>
        <Header />
        <BackgroundWrapper>
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
        </BackgroundWrapper>
        <Footer />
      </>
    );
  }
}

export default Login;
