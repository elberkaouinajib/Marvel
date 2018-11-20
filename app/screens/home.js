import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };
  state = {
    isToggleOn: true
  };
  componentDidMount() { }
  render() {
    return (
      <View>
        <Button
          title="Go to Marvel heros"
          onPress={() =>
            this.props.navigation.navigate("MarvelListCharsScreen")
          }
        />
        <Button
          title="Go to Creators"
          onPress={() =>
            this.props.navigation.navigate("MarvelListCreatsScreen")
          }
        />
      </View>
    );
  }
}
