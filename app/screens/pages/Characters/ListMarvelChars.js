import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ListItem, Left, Body, Thumbnail, Text } from "native-base";
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
      <ListItem avatar onPress={() => this.actionOnRow(item.id)}>
        <Left>
          <Thumbnail
            source={{
              uri: `${item.thumbnail.path}.${item.thumbnail.extension}`
            }}
          />
        </Left>
        <Body>
          <Text>{item.name}</Text>
          <Text note>{item.description.substr(0, 50)} </Text>
        </Body>
      </ListItem>
    </View>
  );

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.MarvelChars}
        renderItem={this.renderItem}
        onEndReached={this.onEndReached}
      />
    );
  }
}
const mapStateToProps = state => {
  console.log("propos marvel");
  console.log(state.getChars);
  console.log("propos marvel");
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
