import React, { Component } from "react";
import styled from "styled-components";

const Search = styled.div`
  .searchBar {
    color: #fff;
    padding: 5px;
    width: 120px;
    height: 30px;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 5px;

    ::placeholder {
      color: #fff;
    }
  }
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("form was submitted;");
  }

  render() {
    return (
      <Search>
        <form onSubmit={this.handleSubmit}>
          <input
            style={{
              backgroundImage: "SearchIcon",
              backgroundPosition: "10px 10px",
              backgroundRepeat: "no-repeat",
            }}
            className="searchBar"
            placeholder="Search"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </Search>
    );
  }
}

export default SearchBar;
