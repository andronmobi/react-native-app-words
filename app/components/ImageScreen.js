import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import ColorText from "./ColorText";
import Images from './Images';

export default class ImageScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "Image",
  });

  constructor() {
    super();
    this.fileName = '../res/img/airplane.png';// + this.props.navigation.state.params.item["image"];
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          source={Images[this.props.navigation.state.params.item["name"]]}
          resizeMode="contain"
          style={{
            flex: 1,
            alignSelf: 'stretch',
            width: null,
            height: null,
          }}
        />
        <ColorText style={styles.welcome}>{this.props.navigation.state.params.item["name_fr"]}</ColorText>
      </View>
    );
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
