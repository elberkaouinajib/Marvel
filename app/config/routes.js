import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons";
import Home from "../screens/home";
import MarvelListChars from "../screens/pages/Characters/ListMarvelChars";
import MarvelCharInfo from "../screens/pages/Characters/MarvelCharInfo";
import ListMarvelComics from "../screens/pages/Comics/ListMarvelComics";
import MarvelComicInfo from "../screens/pages/Comics/MarvelComicInfo";
import ListMarvelSeries from "../screens/pages/Series/ListMarvelSeries";
import MarvelSerieInfo from "../screens/pages/Series/MarvelSerieInfo";
import ListCharSeries from "../screens/pages/Characters/ListCharSeries";

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
      headerTitle: "Hero Detail"
    }
  },
  ListCharSeriesScreen: {
    screen: ListCharSeries,
    navigationOptions: {
      headerTitle: "Hero Series"
    }
  }
});

export const navComics = StackNavigator({
  ListMarvelComicsScreen: {
    screen: ListMarvelComics,
    navigationOptions: {
      headerTitle: "Marvel Comics"
    }
  },
  MarvelComicInfoScreen: {
    screen: MarvelComicInfo,
    navigationOptions: {
      headerTitle: "Comic Detail"
    }
  }
});

export const navSeries = StackNavigator({
  ListMarvelSeriesScreen: {
    screen: ListMarvelSeries,
    navigationOptions: {
      headerTitle: "Marvel Series"
    }
  },
  MarvelSerieInfoScreen: {
    screen: MarvelSerieInfo,
    navigationOptions: {
      headerTitle: "Serie Detail"
    }
  }
});

export default TabNavigator(
  {
    Home: {
      screen: navHome
    },
    Heros: {
      screen: navCharacters
    },
    Comics: {
      screen: navComics
    },
    Series: {
      screen: navSeries
    }
  },
  {
    tabBarPosition: "bottom"
  }
);
