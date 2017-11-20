import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import ColorText from "./ColorText";

export default class ImageScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Animal",
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          source={require('../img/vache.jpg')}
          style={{ height: 200, left: 0, right: 0 }}
          resizeMode="contain"
        />
        <ColorText style={styles.welcome}>{this.props.navigation.state.params.user}</ColorText>
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
