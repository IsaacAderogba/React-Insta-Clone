import React from "react";
import Instagram from "./instagram.png";
import styled, { css } from "styled-components";

import "./Login.css";

const TextInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`

const TextInput = styled.input`
    border: 1px solid #d4d4d4;
    flex-basis: 30px;
    background-color: #fafafa;
    border: 1px solid #d4d4d4;
    padding-left: 16px;
    font-size: 14px;
    margin: 4px 0px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Button = styled.button`
  background: white;
  border-radius: 4px;
  border: 2px solid #5b74de;
  color: #5b74de;
  margin: 0 1.5em;
  padding: 0.5em 1em;
  font-size: 14px;
  flex: 1;

  ${props =>
    props.primary &&
    css`
      background: #5b74de;
      color: white;
      -webkit-box-shadow: -1px 0px 22px -3px rgba(91,116,222,0.58);
      -moz-box-shadow: -1px 0px 22px -3px rgba(91,116,222,0.58);
      box-shadow: -1px 0px 22px -3px rgba(91,116,222,0.58);
    `};
`

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <div className="InstagramPhoto">
          <img src={Instagram} alt="Instagram" />
        </div>
        <form className="LoginForm" onSubmit={this.props.onLogin}>

            <TextInputWrapper>
                <TextInput required placeholder="Username" onChange={this.props.usernameInputHandler} value={this.props.username}></TextInput>
                <TextInput required type="password" placeholder="Password" onChange={this.props.passwordInputHandler} value={this.props.password}></TextInput>

            </TextInputWrapper>
          <ButtonWrapper>
            <Button primary>Login</Button>
            <Button>Sign up</Button>
          </ButtonWrapper>
        </form>
      </div>
    );
  }
}

export default Login;
