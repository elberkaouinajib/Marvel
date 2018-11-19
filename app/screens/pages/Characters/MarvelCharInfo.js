import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import allTheActions from "../../../actions";
class MarvelCharInfo extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };
  state = {
    personame: { toto: 0 }
  };
  componentDidMount() {
    const { navigation } = this.props;
    const { actions } = this.props;
    const CharId = navigation.getParam("CharId");
    actions.marvelChar.getCharacterInfo(CharId);
  }
  render() {
    console.log(this.props);
    if (this.props.marvelChar.marvelChar.thumbnail)
      return (
        <View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              width: 300,
              height: 300,
              backgroundColor: "#fff",
              borderRadius: 300
            }}
            source={{
              uri: `${this.props.marvelChar.marvelChar.thumbnail.path}.${
                this.props.marvelChar.marvelChar.thumbnail.extension
              }`
            }}
          />
          <Text>{this.props.marvelChar.marvelChar.name}</Text>
          <Text>{this.props.marvelChar.marvelChar.description}</Text>
        </View>
      );
    else return <View />;
  }
}
const mapStateToProps = state => {
  return {
    marvelChar: state.marvelChar
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    marvelChar: bindActionCreators(allTheActions.marvelChar, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarvelCharInfo);
