import React, { Component } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
.searchBar {
  color: black;
  padding: 5px;
  width: 250px;
  height: 40px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 5px;

  ::placeholder {
    color: black;
  }
`;

class InputTaB extends Component {
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
      <InputContainer>
        <input
          className="searchBar"
          placeholder={this.props.placeholder}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </InputContainer>
    );
  }
}

export default InputTaB;
