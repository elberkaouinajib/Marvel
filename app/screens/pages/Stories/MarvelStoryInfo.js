import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import allTheActions from "../../../actions";
import { Grid, Row, Col } from "react-native-easy-grid";
class MarvelStoryInfo extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };
  componentDidMount() {
    const { navigation } = this.props;
    const { actions } = this.props;
    const storyId = navigation.getParam("storyId");
    actions.marvelStory.getStoryInfo(storyId);
  }
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Grid>
          <Col>
            <Row size={40}>
              <Col>
                <Image
                  style={{ height: 200, width: 200 }}
                  source={{
                    uri: this.props.marvelStory.marvelStory.thumbnail
                      ? `${this.props.marvelStory.marvelStory.thumbnail.path}.${
                          this.props.marvelStory.marvelStory.thumbnail.extension
                        }`
                      : ""
                  }}
                />
              </Col>
              <Col>
                <Text>Title : {this.props.marvelStory.marvelStory.title}</Text>
              </Col>
            </Row>
            <Row size={60}>
              <Col>
                <Text
                  style={{
                    textShadowColor: "yellow",
                    fontWeight: "bold",
                    color: "red"
                  }}
                >
                  Description :{" "}
                </Text>
                <Text>{this.props.marvelStory.marvelStory.description}</Text>
                <View style={{ marginTop: 20 }}>
                  <Button
                    buttonStyle={{
                      margin: 3,
                      backgroundColor: "red",
                      borderWidth: 1,
                      borderColor: "yellow",
                      borderRadius: 10
                    }}
                    title="Heros"
                    onPress={() =>
                      this.props.navigation.navigate("ListStoryCharsScreen")
                    }
                  />
                  <Button
                    buttonStyle={{
                      margin: 3,
                      backgroundColor: "red",
                      borderWidth: 1,
                      borderColor: "yellow",
                      borderRadius: 10
                    }}
                    title="Series"
                    onPress={() =>
                      this.props.navigation.navigate("ListStorySeriesScreen")
                    }
                  />
                  <Button
                    buttonStyle={{
                      margin: 3,
                      backgroundColor: "red",
                      borderWidth: 1,
                      borderColor: "yellow",
                      borderRadius: 10
                    }}
                    title="Comics"
                    onPress={() =>
                      this.props.navigation.navigate("ListStoryComicsScreen")
                    }
                  />
                </View>
              </Col>
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  }
});

const mapStateToProps = state => {
  return {
    marvelStory: state.marvelStory
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    marvelStory: bindActionCreators(allTheActions.marvelStory, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarvelStoryInfo);
