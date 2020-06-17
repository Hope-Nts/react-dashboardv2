import React, { Component } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { ExpandMoreIcon } from "../../contentComponents/icons/ProjectIcons";
import {signOut} from '../../firebase'

const NamebarContainer = styled.div`
  padding: 2px 2px;
  cursor: pointer;
  margin: 0px;

  .namebar-toggle {
    border: 1px solid white;
    border-radius: 4px;
    margin: 0px 0px 0px 0px;
    background-color: var(--main-dark-blue);
    z-index: 1;
    ul {
      margin: 0px 0px 0px -40px;
      display: inline-block;
    }
    li {
      list-style: none;
      border: 1px solid white;
      width: 110px;
      &:hover {
        background-color: grey;
        color: black;
      }
    }
  }
`;

const DropDownButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  color: #fff;
`;

class NameBar extends Component {
  state = {
    dropdown: false,
  };

  handleDropDown = (e) => {
    e.preventDefault();
    this.setState({
      dropdown: !this.state.dropdown,
    });
  };
  render() {
    const name = this.props.name;
    return (
      <NamebarContainer>
        <span>{name}</span>
        <DropDownButton onClick={this.handleDropDown}>
          <ExpandMoreIcon />
        </DropDownButton>
        {this.state.dropdown && (
          <div className="namebar-toggle">
            <ul>
              <li>Profile</li>
              <li onClick={signOut}>Sign Out</li>
            </ul>
          </div>
        )}
      </NamebarContainer>
    );
  }
}

export default NameBar;

NameBar.propTypes = {
  name: PropTypes.string,
};
