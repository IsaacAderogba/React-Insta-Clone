import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledAuthor = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0 8px 0;

  div {
    height: 24px;
    width: 24px;
    border-radius: 1000px;
  }

  div img {
    width: inherit;
    border-radius: inherit;
  }

  span {
    margin-left: 8px;
  }
`;

export default class Author extends React.Component {
  render() {
    const { username, thumbnailUrl } = this.props.instagramPostData;

    return (
      <StyledAuthor>
        <div>
          <img src={thumbnailUrl} alt="author" />
        </div>
        <span>{username}</span>
      </StyledAuthor>
    );
  }
}

Author.propTypes = {
  instagramPostData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
  }).isRequired
};
