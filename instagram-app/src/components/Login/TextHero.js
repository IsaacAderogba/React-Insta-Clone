import React from "react";
import styled, { css } from "styled-components";

const HeroText = styled.h1`
  color: #142276;
  font-weight: 800;
`;

const PinkSpan = styled.span`
  color: #f8707b;
`;

const WelcomeText = styled.p`
  color: lightslategrey;
  font-size: 16px;
`;

const FormContainer = styled.form`
  width: 45%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    width: 90%;
    height: 80vh;
  }
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
  font-size: 16px;
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
  font-size: 16px;
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

  @media only screen and (max-width: 700px) {
    margin: 0 0.35em;
  }
`;

const AltLoginWrapper = styled.div`
  display: flex;
  flex-wrap: wrap
  justify-content: space-evenly;
  margin: 24px 0px;
`;

const AltLogin = styled.p`
  color: lightslategrey;

  ${props =>
    props.social &&
    css`
      color: #5b74de;
      cursor: pointer;
    `};

  @media only screen and (max-width: 700px) {
    margin: 8px;
  }
`;

class FormHero extends React.Component {
  render() {
    return (
      <FormContainer onSubmit={this.props.onLogin}>
        <HeroText>
          Community-First Photo Sharing<PinkSpan>.</PinkSpan>
        </HeroText>
        <WelcomeText>
          Welcome! Please login or sign up for an account.
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
        <AltLoginWrapper>
          <AltLogin>Or login with </AltLogin>
          <AltLogin social>Facebook</AltLogin>
          <AltLogin social>Pinterest</AltLogin>
          <AltLogin social>Google</AltLogin>
        </AltLoginWrapper>
      </FormContainer>
    );
  }
}

export default FormHero;
