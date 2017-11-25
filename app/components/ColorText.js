import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

export default class ColorText extends React.Component<{}> {

  _getColor(char, lang) {
    var color = "blue";
    if (lang === "ru") {
      switch (char.toLowerCase()) {
        case 'а':
        case 'е':
        case 'и':
        case 'э':
        case 'о':
        case 'у':
        case 'ы':
        case 'ё':
        case 'ю':
        case 'я':
          color = "red";
          break;
      }
    } else {
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
    }
    return color;
  }

  _getColoredText(str, lang) {
    var i = 0;
    var charArr = str.split("");
    var tagArr = charArr.map((char) =>
      <Text key={i++} style={{color : this._getColor(char, lang)}}>{char.toUpperCase()}</Text>
    );
    return tagArr;
  }

  render() {
    return (
      <Text style={styles.mycolortext}>
        {this._getColoredText(this.props.children, this.props.lang)}
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