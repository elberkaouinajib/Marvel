import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ListItem, Left, Body, Thumbnail, Text } from "native-base";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import allTheActions from "../../../actions";
class ListMarvelCreats extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    MarvelCreats: PropTypes.array,
    offset: PropTypes.number,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };
  componentDidMount() {
    if (!this.props.marvelCreats) {
      this.props.actions.getCreats.getCreators();
    }
  }
  actionOnRow = item => {
    console.log(item);
    this.props.navigation.navigate("MarvelCreatInfoScreen", {
      CreatId: item
    });
  };
  onEndReached = () => {
    const { actions, offset } = this.props;
    actions.getCreats.getCreators(offset + 20);
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
  console.log(state.getCreats);
  console.log("propos marvel");
  return {
    MarvelChars: state.getCreats.marvelCreatsList,
    offset: state.getCreats.offset
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    getChars: bindActionCreators(allTheActions.getCreats, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMarvelCreats);
