import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import allTheActions from "../../../actions";
class MarvelComicInfo extends Component {
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
    const ComicId = navigation.getParam("ComicId");
    actions.marvelComic.getComicInfo(ComicId);
  }
  render() {
    console.log(this.props);
    if (this.props.marvelComic.marvelComic.thumbnail)
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
              uri: `${this.props.marvelComic.marvelComic.thumbnail.path}.${
                this.props.marvelComic.marvelComic.thumbnail.extension
              }`
            }}
          />
          <Text>{this.props.marvelComic.marvelComic.title}</Text>
          <Text>
            {this.props.marvelComic.marvelComic.description
              ? this.props.marvelComic.marvelComic.description.substr(0, 50)
              : " "}{" "}
          </Text>
        </View>
      );
    else return <View />;
  }
}
const mapStateToProps = state => {
  return {
    marvelComic: state.marvelComic
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    marvelComic: bindActionCreators(allTheActions.marvelComic, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarvelComicInfo);
