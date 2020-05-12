import React, { Component } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { ExpandMoreIcon } from "../../contentComponents/icons/ProjectIcons";

const NamebarContainer = styled.div`
  padding: 2px 2px;
  cursor: pointer;
`;

const DropDownButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  color: #fff;
`;

class NameBar extends Component {
  state = {};
  render() {
    const name = this.props.name;
    return (
      <NamebarContainer>
        <span>{name}</span>
        <DropDownButton>
          <ExpandMoreIcon />
        </DropDownButton>
      </NamebarContainer>
    );
  }
}

export default NameBar;

NameBar.propTypes = {
  name: PropTypes.string,
};
