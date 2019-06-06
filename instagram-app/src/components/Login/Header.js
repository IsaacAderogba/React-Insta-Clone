import React from "react";
import styled from "styled-components";
import logoIcon from "../../pinstaLogo.png";
import logoText from "../../pinstaText.png";

const BackgroundWrapper = styled.div`
  border-bottom: 1px solid #eaeaea;
`;

const StyledHeader = styled.nav`
  display: flex;
  height: 10vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;

  ul li {
    display: inline-block;
    margin-left: 64px;
    font-size: 20px;
    color: #5c74de;

    @media only screen and (max-width: 700px) {
      margin-left: 24px;
    }
  }
`;

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

class Header extends React.Component {
  render() {
    return (
      <BackgroundWrapper>
        <StyledHeader>
          <StyledLogoContainer>
            <StyledLogo>
              <img src={`${logoIcon}`} alt="Instagram Logo Icon" />
            </StyledLogo>
            <StyledText>
              <img src={`${logoText}`} alt="Instagram Logo Text" />
            </StyledText>
          </StyledLogoContainer>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </StyledHeader>
      </BackgroundWrapper>
    );
  }
}

export default Header;
