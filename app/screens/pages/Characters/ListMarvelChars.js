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
class ListMarvelChars extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    MarvelChars: PropTypes.array,
    offset: PropTypes.number,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };
  componentDidMount() {
    if (!this.props.marvelChars) {
      this.props.actions.getChars.getCharacters();
    }
  }
  actionOnRow = item => {
    console.log(item);
    this.props.navigation.navigate("MarvelCharInfoScreen", {
      CharId: item
    });
  };
  onEndReached = () => {
    const { actions, offset } = this.props;
    actions.getChars.getCharacters(offset + 20);
  };

  _keyExtractor = item => `${item.id}`;

  renderItem = ({ item }) => (
    <View>
      <ListItem
        avatar
        onPress={() => this.actionOnRow(item.id)}
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
              uri: `${item.thumbnail.path}.${item.thumbnail.extension}`
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
              <Text style={{ margin: 0, padding: 0 }}>{item.name}</Text>
            </Row>
            <Row size={75}>
              <Text note>{item.description.substr(0, 50)} </Text>
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
          data={this.props.MarvelChars}
          renderItem={this.renderItem}
          onEndReached={this.onEndReached}
        />
      </Background>
    );
  }
}
const mapStateToProps = state => {
  return {
    MarvelChars: state.getChars.marvelCharsList,
    offset: state.getChars.offset
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    getChars: bindActionCreators(allTheActions.getChars, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMarvelChars);
