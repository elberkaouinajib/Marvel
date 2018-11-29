import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  ImageBackground
} from "react-native";
import { theme } from "../../../config/theme";
import Background from "../../../components/Background";
import {
  ListItem,
  Left,
  Body,
  Thumbnail,
  Text,
  Grid,
  Row,
  Col
} from "native-base";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import allTheActions from "../../../actions";
class ListCharStories extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    MarvelStories: PropTypes.array,
    offset: PropTypes.number,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };
  componentDidMount() {
    console.log("getStories", this.props.actions.getStories);
    if (this.props.marvelChar) {
      this.props.actions.getStories.cleanCharStories();
      this.props.actions.getStories.getCharStories(0, this.props.marvelChar.id);
    }
  }
  onEndReached = () => {
    const { actions, offset } = this.props;
    actions.getStories.getCharStories(offset + 20, this.props.marvelChar.id);
  };

  _keyExtractor = item => `${item.id}`;

  renderItem = ({ item }) => (
    <View>
      <ListItem
        avatar
        style={{
          marginBottom: 5,
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
          borderWidth: 1
        }}
      >
        <Left style={{ marginTop: -15 }}>
          <Thumbnail
            square
            large
            source={{
              uri: item.thumbnail
                ? `${item.thumbnail.path}.${item.thumbnail.extension}`
                : ""
            }}
          />
        </Left>
        <Body style={{ marginTop: -15 }}>
          <Grid>
            <Row
              size={15}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "red",
                margin: 0
              }}
            >
              <Text style={{ margin: 0, padding: 0 }}>{item.title}</Text>
            </Row>
            <Row size={75}>
              <Text note>
                {item.description ? item.description.substr(0, 50) : " "}{" "}
              </Text>
            </Row>
          </Grid>
        </Body>
      </ListItem>
    </View>
  );

  render() {
    return (
      <Background>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.MarvelStories}
          renderItem={this.renderItem}
          onEndReached={this.onEndReached}
        />
      </Background>
    );
  }
}
const mapStateToProps = state => {
  return {
    MarvelStories: state.getStories.marvelCharStoriesList,
    offset: state.getStories.offset,
    marvelChar: state.marvelChar.marvelChar
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    getStories: bindActionCreators(allTheActions.getStories, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCharStories);
