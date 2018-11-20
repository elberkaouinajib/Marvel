import React from 'react'
import { StackNavigator, TabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons'
import Home from "../screens/home";
import MarvelListChars from "../screens/pages/Characters/ListMarvelChars";
import MarvelCharInfo from "../screens/pages/Characters/MarvelCharInfo";
import MarvelListCreats from "../screens/pages/Creators/ListMarvelCreats";
import MarvelCreatInfo from "../screens/pages/Creators/MarvelCreatInfo";
export const navHome = StackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: {
      headerTitle: "Home"
    }
  }
});

export const navCharacters = StackNavigator({
  MarvelListCharsScreen: {
    screen: MarvelListChars,
    navigationOptions: {
      headerTitle: "Marvel Heros"
    }
  },
  MarvelCharInfoScreen: {
    screen: MarvelCharInfo,
    navigationOptions: {
      headerTitle: "Heros Detail"
    }
  }
});

export const navCreators = StackNavigator({
  MarvelListCreatsScreen: {
    screen: MarvelListCreats,
    navigationOptions: {
      headerTitle: "Marvel Creators"
    }
  },
  MarvelCreatInfoScreen: {
    screen: MarvelCreatInfo,
    navigationOptions: {
      headerTitle: "Creators Detail"
    }
  }
});
export default TabNavigator({
  Home: {
    screen: navHome
  },
  Heros: {
    screen: navCharacters
  },
  Creators: {
    screen: navCreators
  },
}, {
    tabBarPosition: 'bottom',
  })