import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import allTheActions from "../../../actions";
import { Grid, Row, Col } from "react-native-easy-grid";
class MarvelCharInfo extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };
  state = {
    CharId: 0,
    CharPic: "",
    CharName: ""
  };
  componentDidMount() {
    const { navigation } = this.props;
    const { actions } = this.props;
    const CharId = navigation.getParam("CharId");
    actions.marvelChar.getCharacterInfo(CharId);
    this.setState({ CharId });
  }
  render() {
    if (this.props.marvelChar.marvelChar.thumbnail)
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
                        this.props.marvelChar.marvelChar.thumbnail.path
                      }.${this.props.marvelChar.marvelChar.thumbnail.extension}`
                    }}
                  />
                </Col>
                <Col>
                  <Text>Name : {this.props.marvelChar.marvelChar.name}</Text>
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
                  <Text>{this.props.marvelChar.marvelChar.description}</Text>
                  <View style={{ marginTop: 20 }}>
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
                        this.props.navigation.navigate("MarvelListCharsScreen")
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
                        this.props.navigation.navigate("ListCharSeriesScreen")
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
                        this.props.navigation.navigate("ListCharStoriesScreen")
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
