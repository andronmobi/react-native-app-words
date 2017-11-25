import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight
} from 'react-native';
import ColorText from "./ColorText";
import Images from './Images';

export default class ImageScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "",
  });

  render() {
    const { navigate } = this.props.navigation;
    const {goBack} = this.props.navigation;

    return (
      <View style={styles.container}>
        <TouchableHighlight style={{width:"100%", height:"100%"}}
          onPress={() => goBack()}>
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
        </TouchableHighlight>
        <ColorText style={styles.welcome} lang={"ru"}>{this.props.navigation.state.params.item["name_ru"]}</ColorText>
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
    paddingBottom: 40,
  },
});
