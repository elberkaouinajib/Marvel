import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ListItem, Left, Body, Thumbnail, Text } from "native-base";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import allTheActions from "../../../actions";
class ListMarvelComics extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    MarvelChars: PropTypes.array,
    offset: PropTypes.number,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };
  componentDidMount() {
    if (!this.props.marvelComics) {
      this.props.actions.getComics.getComics();
    }
  }
  actionOnRow = item => {
    this.props.navigation.navigate("MarvelComicInfoScreen", {
      ComicId: item
    });
  };
  onEndReached = () => {
    const { actions, offset } = this.props;
    actions.getComics.getComics(offset + 20);
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
          <Text>{item.title}</Text>
          <Text note>
            {item.description ? item.description.substr(0, 50) : " "}{" "}
          </Text>
        </Body>
      </ListItem>
    </View>
  );

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.MarvelComics}
        renderItem={this.renderItem}
        onEndReached={this.onEndReached}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    MarvelComics: state.getComics.marvelComicsList,
    offset: state.getComics.offset
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    getComics: bindActionCreators(allTheActions.getComics, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMarvelComics);
