import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

export default class ColorText extends React.Component<{}> {

  _getColor(char) {
    var color = "blue";
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'y':
        color = "red";
        break;
    }
    return color;
  }

  _getColoredText(str) {
    var i = 0;
    var charArr = str.split("");
    var tagArr = charArr.map((char) =>
      <Text key={i++} style={{color : this._getColor(char)}}>{char}</Text>
    );
    return tagArr;
  }

  render() {
    return (
      <Text style={styles.mycolortext}>
        {this._getColoredText(this.props.children)}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  mycolortext: {
    fontSize: 20,
    textAlign: 'center',
  }
});