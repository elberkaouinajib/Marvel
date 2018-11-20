import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import allTheActions from "../../../actions";
class MarvelCreatInfo extends Component {
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
    const CreatId = navigation.getParam("CreatId");
    actions.marvelCreat.getCreatorsInfo(CreatId);
  }
  render() {
    console.log(this.props);
    if (this.props.marvelCreat.marvelCreat.thumbnail)
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
              uri: `${this.props.marvelCreat.marvelCreat.thumbnail.path}.${
                this.props.marvelCreat.marvelCreat.thumbnail.extension
                }`
            }}
          />
          <Text>{this.props.marvelCreat.marvelCreat.name}</Text>
          <Text>{this.props.marvelCreat.marvelCreat.description}</Text>
        </View>
      );
    else return <View />;
  }
}
const mapStateToProps = state => {
  return {
    marvelCreat: state.marvelCreat
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    marvelChar: bindActionCreators(allTheActions.marvelCreat, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarvelCreatInfo);
