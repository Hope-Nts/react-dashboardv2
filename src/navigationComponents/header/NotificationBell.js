import React, { Component } from "react";
//import styled from "styled-components";
import { PropTypes } from "prop-types";
import { NotificationIcon } from "../../contentComponents/icons/ProjectIcons";

class NotificationBell extends Component {
  state = {};
  render() {
    //const isOn = this.props.isNotified;
    return <NotificationIcon style={{ cursor: "pointer" }} />;
  }
}

export default NotificationBell;

NotificationBell.propTypes = {
  isOn: PropTypes.bool,
};
