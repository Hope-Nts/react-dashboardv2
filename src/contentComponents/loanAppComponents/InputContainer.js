import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div``;

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Container>
        <input
          className="searchBar"
          placeholder={this.props.placeholder}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </Container>
    );
  }
}

export default InputContainer;
