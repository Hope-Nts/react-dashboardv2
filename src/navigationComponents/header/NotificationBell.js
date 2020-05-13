import React, { Component } from "react";
//import styled from "styled-components";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { NotificationIcon } from "../../contentComponents/icons/ProjectIcons";

const NoticationButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  color: #fff;
`;

class NotificationBell extends Component {
  state = {};
  render() {
    //const isOn = this.props.isNotified;
    return <NoticationButton>{<NotificationIcon />}</NoticationButton>;
  }
}

export default NotificationBell;

NotificationBell.propTypes = {
  isOn: PropTypes.bool,
};
