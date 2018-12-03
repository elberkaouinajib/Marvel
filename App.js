/**
 * Sample React Native App
 * https://github.com/facebook/react-native²
 *
 * @format
 * @flow
 */
import { Provider } from "react-redux";
import React, { Component } from "react";
import StackNavigator from "./app/config/routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./app/config/theme";
import { store } from "./app/config/store";
console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StackNavigator />
        </ThemeProvider>
      </Provider>
    );
  }
}
