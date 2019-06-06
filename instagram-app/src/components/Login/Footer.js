import React from "react";
import styled from "styled-components";

const BackgroundWrapper = styled.div`
  background-color: #ffffff;
  border-top: 1px solid #eaeaea;
`;

const StyledFooter = styled.footer`
  height: 10vh;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding: 0 16px;

  p {
    font-size: 16px;
    color: lightslategrey;
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <BackgroundWrapper>
        <StyledFooter>
          <p>
            Made with{" "}
            <span role="img" aria-label="coffee">
              ☕️
            </span>{" "}
            and{" "}
            <span role="img" aria-label="love">
              🤘🏼️
            </span>{" "}
            by Isaac Aderogba
          </p>
        </StyledFooter>
      </BackgroundWrapper>
    );
  }
}

export default Footer;
