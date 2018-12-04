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
class ListMarvelSeries extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    MarvelSeries: PropTypes.array,
    offset: PropTypes.number,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };
  componentDidMount() {
    if (!this.props.marvelseries) {
      this.props.actions.getSeries.getSeries();
    }
  }
  actionOnRow = item => {
    this.props.navigation.navigate("MarvelSerieInfoScreen", {
      serieId: item
    });
  };
  onEndReached = () => {
    const { actions, offset } = this.props;
    actions.getSeries.getSeries(offset + 20);
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
          data={this.props.MarvelSeries}
          renderItem={this.renderItem}
          onEndReached={this.onEndReached}
        />
      </Background>
    );
  }
}
const mapStateToProps = state => {
  return {
    MarvelSeries: state.getSeries.marvelSeriesList,
    offset: state.getSeries.offset
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    getSeries: bindActionCreators(allTheActions.getSeries, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMarvelSeries);
