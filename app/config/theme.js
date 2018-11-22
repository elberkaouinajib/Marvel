import styled from "styled-components";

const Button = styled.TouchableOpacity`
  color: palevioletred;
  font-size: 1;
  height: 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const BackgroundContainer = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`;
const BackgroundView = styled.View`
  flex: 1;
  width: 100%;
`;
const theme = {
  color: {
    primary: "#336699",
    secondary: "#000000",
    white: "#FFFFFF"
  },
  background: "../static/images/background.png"
};
export { Button, theme, BackgroundContainer, BackgroundView };
