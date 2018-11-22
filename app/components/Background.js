import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, BackgroundView, BackgroundContainer } from "../config/theme";

export default class BackgroundImage extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const { children } = this.props;
    console.log(theme.background);
    return (
      <BackgroundView>
        <BackgroundContainer source={theme.background} />
        {children}
      </BackgroundView>
    );
  }
}
