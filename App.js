/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MyList from  "./app/components/MyList"
import ImageScreen from  "./app/components/ImageScreen"

const animals = [
  {id: 0, title: 'Vache'},
  {id: 1, title: 'Cochon'},
  {id: 2, title: 'Crocodile'},
  {id: 3, title: 'Pigeon'},
  {id: 4, title: 'Lion'}
];

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Nikitos',
  };

  constructor() {
    super();
    var config = require('./app/res/config.json');
    this.items = config.items;
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].id = i;
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MyList
          data={this.items} navigate={navigate}
        />
      </View>
    );
  }
};

const NikitosApp = StackNavigator({
  Home: { screen: HomeScreen },
  ImageScreen: {screen: ImageScreen},
});

export default class App extends Component<{}> {
  render() {
    return <NikitosApp/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
});
