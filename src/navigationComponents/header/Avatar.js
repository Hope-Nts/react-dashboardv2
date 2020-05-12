import React, { Component } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const AvatarImage = styled.img`
  width: 35px;
  height: 35px;
  vertical-align: middle;
  border-radius: 50%;
  margin right: 30px;
`;

class Avatar extends Component {
  state = {};
  render() {
    const url = this.props.url;
    return <AvatarImage src={url} />;
  }
}

export default Avatar;

Avatar.propTypes = {
  name: PropTypes.string,
};
