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
  componentDidMount() {}
  render() {
    return (
      <View>
        <Button
          title="Go to Marvel"
          onPress={() =>
            this.props.navigation.navigate("MarvelListCharsScreen")
          }
        />
      </View>
    );
  }
}
