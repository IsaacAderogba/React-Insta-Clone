import React from "react";
import styled from "styled-components";

const StyledSearch = styled.input`
  flex-basis: 250px;
  flex-shrink: 10;
  font-size: 14px;
  height: 30px;
  text-align: center;
  background-color: #fafafa;
  border: 1px solid #d4d4d4;
  border-radius: 16px;
`;

export default class Search extends React.Component {
  render() {
    return (
      <StyledSearch
        value={this.props.searchInput}
        type="text"
        placeholder="search"
        onChange={this.props.onSearchHandler}
      />
    );
  }
}
