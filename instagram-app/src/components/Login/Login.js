import React from "react";
import styled from "styled-components";
import PhotoHero from "./PhotoHero";
import FormHero from "./TextHero";
import Header from "./Header";
import Footer from "./Footer";

const BackgroundWrapper = styled.div`
  background-color: #fafafa;
`;

const LoginWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

class Login extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BackgroundWrapper>
          <LoginWrapper>
            <PhotoHero />
            <FormHero
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
