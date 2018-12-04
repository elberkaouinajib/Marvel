import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import allTheActions from "../../../actions";
import { Grid, Row, Col } from "react-native-easy-grid";
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
    if (this.props.marvelComic.marvelComic.thumbnail)
      return (
        <View style={styles.container}>
          <Grid>
            <Col>
              <Row size={40}>
                <Col>
                  <Image
                    style={{ height: 200, width: 200 }}
                    source={{
                      uri: `${
                        this.props.marvelComic.marvelComic.thumbnail.path
                      }.${
                        this.props.marvelComic.marvelComic.thumbnail.extension
                      }`
                    }}
                  />
                </Col>
                <Col>
                  <Text>
                    Title : {this.props.marvelComic.marvelComic.title}
                  </Text>
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
                  <Text>{this.props.marvelComic.marvelComic.description}</Text>
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
                        this.props.navigation.navigate("ListComicCharsScreen")
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
                        this.props.navigation.navigate("ListComicSeriesScreen")
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
                      title="Stories"
                      onPress={() =>
                        this.props.navigation.navigate("ListComicStoriesScreen")
                      }
                    />
                  </View>
                </Col>
              </Row>
            </Col>
          </Grid>
        </View>
      );
    else return <View />;
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
