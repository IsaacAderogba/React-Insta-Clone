import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Icons from "./Icons";
import styled from "styled-components";

import "./SearchBar.css";

const BackgroundWrapper = styled.div`
  border-bottom: 1px solid #eaeaea;
`;

const StyledSearchBar = styled.nav`
  display: flex;
  height: 10vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
`;


export default class SearchBar extends React.Component {
  render() {
    return (
      <BackgroundWrapper>
        <StyledSearchBar>
          <Logo />
          <Search
            onSearchHandler={this.props.onSearchHandler}
            searchInput={this.props.searchInput}
          />
          <Icons />
        </StyledSearchBar>
      </BackgroundWrapper>
    );
  }
}
