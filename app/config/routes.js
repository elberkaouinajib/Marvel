import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";
import Home from "../screens/home";

//Characters
import MarvelListChars from "../screens/pages/Characters/ListMarvelChars";
import MarvelCharInfo from "../screens/pages/Characters/MarvelCharInfo";
import ListCharSeries from "../screens/pages/Characters/ListCharSeries";
import ListCharComics from "../screens/pages/Characters/ListCharComics";
import ListCharStories from "../screens/pages/Characters/ListCharStories";

//Comics
import ListMarvelComics from "../screens/pages/Comics/ListMarvelComics";
import MarvelComicInfo from "../screens/pages/Comics/MarvelComicInfo";

//Series
import ListMarvelSeries from "../screens/pages/Series/ListMarvelSeries";
import MarvelSerieInfo from "../screens/pages/Series/MarvelSerieInfo";
import ListSerieChars from "../screens/pages/Series/ListSerieChars";
import ListSerieComics from "../screens/pages/Series/ListSerieComics";
import ListSerieStories from "../screens/pages/Series/ListSerieStories";

//Stories
import ListMarvelStories from "../screens/pages/Stories/ListMarvelStories";
import ListStoryChars from "../screens/pages/Stories/ListStoryChars";
import ListStoryComics from "../screens/pages/Stories/ListStoryComics";
import ListStorySeries from "../screens/pages/Stories/ListStorySeries";
import MarvelStoryInfo from "../screens/pages/Stories/MarvelStoryInfo";

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
  },
  ListCharComicsScreen: {
    screen: ListCharComics,
    navigationOptions: {
      headerTitle: "Hero Comics"
    }
  },
  ListCharStoriesScreen: {
    screen: ListCharStories,
    navigationOptions: {
      headerTitle: "Hero Stories"
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
  },
  ListSerieCharsScreen: {
    screen: ListSerieChars,
    navigationOptions: {
      headerTitle: "Serie Heros"
    }
  },
  ListSerieComicsScreen: {
    screen: ListSerieComics,
    navigationOptions: {
      headerTitle: "Serie Comics"
    }
  },
  ListSerieStoriesScreen: {
    screen: ListSerieStories,
    navigationOptions: {
      headerTitle: "Serie Stories"
    }
  }
});

export const navStories = StackNavigator({
  ListMarvelStoriesScreen: {
    screen: ListMarvelStories,
    navigationOptions: {
      headerTitle: "Marvel Stories"
    }
  },
  MarvelStoryInfoScreen: {
    screen: MarvelStoryInfo,
    navigationOptions: {
      headerTitle: "Story Detail"
    }
  },
  ListStoryCharsScreen: {
    screen: ListStoryChars,
    navigationOptions: {
      headerTitle: "Story Heros"
    }
  },
  ListStoryComicsScreen: {
    screen: ListStoryComics,
    navigationOptions: {
      headerTitle: "Story Comics"
    }
  },
  ListStorySeriesScreen: {
    screen: ListStorySeries,
    navigationOptions: {
      headerTitle: "Story Series"
    }
  }
});

export default TabNavigator(
  {
    Home: {
      screen: navHome,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: () => <Icon name="home" size={25} color="red" />
      }
    },
    Heros: {
      screen: navCharacters,
      navigationOptions: {
        tabBarLabel: "Heros",
        tabBarIcon: () => <Icon name="person" size={25} color="red" />
      }
    },
    Comics: {
      screen: navComics,
      navigationOptions: {
        tabBarLabel: "Comics",
        tabBarIcon: () => <Icon name="book" size={25} color="red" />
      }
    },
    Series: {
      screen: navSeries,
      navigationOptions: {
        tabBarLabel: "Series",
        tabBarIcon: () => <Icon name="tv" size={25} color="red" />
      }
    },
    Stories: {
      screen: navStories,
      navigationOptions: {
        tabBarLabel: "Stories",
        tabBarIcon: () => <Icon name="subject" size={25} color="red" />
      }
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      showIcon: true,
      labelStyle: {
        fontSize: 12.5
      }
    }
  }
);
