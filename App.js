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

import MyList from  "./app/components/MyList"
import ColorText from  "./app/components/ColorText"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const animals = [
  {id: 0, title: 'Vache'},
  {id: 1, title: 'Cochon'},
  {id: 2, title: 'Crocodile'},
  {id: 3, title: 'Pigeon'},
  {id: 4, title: 'Lion'}
];

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <MyList
          data={animals}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd700',
    padding: 20,
  },
});
