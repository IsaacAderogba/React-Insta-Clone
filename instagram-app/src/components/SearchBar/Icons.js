import React from "react";
import styled from "styled-components";

const StyledIcons = styled.div`
  flex-shrink: 1;
  display: flex;
  flex-wrap: none;

  i {
    margin-left: 24px;
    color: #5c74de;
    padding-top: 6px;
    cursor: pointer;
    font-size: 30px;

    @media only screen and (max-width: 700px) {
      margin-left: 12px;
    }
  }
`;

export default class Icons extends React.Component {
  onLogOut = () => {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return (
      <StyledIcons>
        <i className="large material-icons">explore</i>
        <i className="large material-icons">favorite_border</i>
        <i onClick={this.onLogOut} className="large material-icons">person_outline</i>
      </StyledIcons>
    );
  }
}
