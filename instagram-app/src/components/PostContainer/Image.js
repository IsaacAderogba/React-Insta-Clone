import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledImage = styled.div`
  width: 100%;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;

    img {
      width: 100%;
    }
  }
`;

export default class Image extends React.Component {
  render() {
    const { imageUrl } = this.props.instagramPostData;

    return (
      <StyledImage>
        <img src={imageUrl} alt="item posted by author" />
      </StyledImage>
    );
  }
}

Image.propTypes = {
  instagramPostData: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired
  }).isRequired
};
