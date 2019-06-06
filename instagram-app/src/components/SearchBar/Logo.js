import React from 'react';
import logoIcon from "../../pinstaLogo.png";
import logoText from "../../pinstaText.png";
import styled from "styled-components";

import './SearchBar.css';

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.div`
    height: 35px;
    margin-right: 16px;
    padding-right: 16px
    border-right: 1px solid #EAEAEA;
    img {
      height: inherit;
    }

    @media only screen and (max-width: 700px) {
        border: none;
  }
`;

const StyledText = styled.div`
  height: 25px;

  img {
    height: inherit;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export default class Logo extends React.Component {
    render() {
        return (
            <StyledLogoContainer>
            <StyledLogo>
              <img src={`${logoIcon}`} alt="Instagram Logo Icon" />
            </StyledLogo>
            <StyledText>
              <img src={`${logoText}`} alt="Instagram Logo Text" />
            </StyledText>
          </StyledLogoContainer>
        );
    }
}