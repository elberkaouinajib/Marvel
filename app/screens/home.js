import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-native-easy-grid";
export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };
  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Col>
            <Row size={40}>
              <Col>
                <Image
                  style={{ height: 200, width: 200 }}
                  source={{
                    uri: `http://www.radioecn.com/actus/actu-16052018id1488.jpg`
                  }}
                />
              </Col>
              <Col>
                <Text>Stan Lee</Text>
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
                  A propos :{" "}
                </Text>
                <Text>
                  Stanley Lieber, dit Stan Lee, né le 28 décembre 1922 à New
                  York et mort le 12 novembre 2018 à Los Angeles, est un
                  scénariste et éditeur américain de comics. Son nom est associé
                  à Marvel Comics, pour lequel il a imaginé les super-héros
                  Spider-Man, Hulk, Iron Man, les Avengers, les X-Men, ainsi que
                  bien d'autres personnages. Il se surnommait lui-même « Stan
                  the Man ».
                </Text>
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
