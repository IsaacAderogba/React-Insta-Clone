import React from "react";
import Instagram from "./instagram.png";
import styled from "styled-components";

const PhotoContainer = styled.div`
  width: 35%;
  height: 80vh;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const HeroPhoto = styled.img`
  height: 80vh;
`;

class PhotoHero extends React.Component {
    render() {
        return (
            <PhotoContainer>
          <HeroPhoto src={Instagram} alt="Instagram" />
        </PhotoContainer>
        )
    }
}

export default PhotoHero;
