import React from "react";
import Instagram from "./instagram.png";
import styled, { css } from "styled-components";

import "./Login.css";

const LoginWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
`;

const PhotoContainer = styled.div`
  width: 40%;
  height: 100vh;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroPhoto = styled.img`
  height: 90vh;
`;

const HeroText = styled.h1`
  color: #142276;
  font-weight: bold;
`;

const WelcomeText = styled.p`
  color: lightslategrey;
`;

const FormContainer = styled.form`
  width: 40%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const TextInput = styled.input`
  border: 1px solid #d4d4d4;
  flex-basis: 35px;
  background-color: #fafafa;
  border: 1px solid #d4d4d4;
  padding-left: 16px;
  font-size: 14px;
  margin: 8px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  background: white;
  border-radius: 4px;
  border: 2px solid #5b74de;
  color: #5b74de;
  margin: 0 1.5em;
  padding: 0.6em 1em;
  font-size: 14px;
  flex: 1;
  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      background: #5b74de;
      color: white;
      -webkit-box-shadow: -1px 0px 22px -3px rgba(91, 116, 222, 0.58);
      -moz-box-shadow: -1px 0px 22px -3px rgba(91, 116, 222, 0.58);
      box-shadow: -1px 0px 22px -3px rgba(91, 116, 222, 0.58);
    `};
`;

class Login extends React.Component {
  render() {
    return (
      <LoginWrapper>
        <PhotoContainer>
          <HeroPhoto src={Instagram} alt="Instagram" />
        </PhotoContainer>
        <FormContainer onSubmit={this.props.onLogin}>
          <HeroText>Community-First Photo Sharing</HeroText>
          <WelcomeText>
            Welcome! please login or sign up to your account.
          </WelcomeText>
          <TextInputWrapper>
            <TextInput
              required
              placeholder="Username"
              onChange={this.props.usernameInputHandler}
              value={this.props.username}
            />
            <TextInput
              required
              type="password"
              placeholder="Password"
              onChange={this.props.passwordInputHandler}
              value={this.props.password}
            />
          </TextInputWrapper>
          <ButtonWrapper>
            <Button primary>Login</Button>
            <Button>Sign up</Button>
          </ButtonWrapper>
        </FormContainer>
      </LoginWrapper>
    );
  }
}

export default Login;
