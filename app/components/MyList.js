import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Button from 'react-native-button';
import ColorText from "./ColorText";

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id, this.props.title);
  };

  render() {
    return (
      <Button
        onPress={this._onPress}
        containerStyle={styles.mybuttoncontainer}>
        <ColorText>{this.props.title}</ColorText>
      </Button>
    )
  }
}

export default class MyList extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string, title: string) => {
    console.log("item: " + id);
    this.props.navigate('ImageScreen', { user: title})
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  mybuttoncontainer: {
    margin: 5,
    padding: 10,
    width: 200,
    height: 45,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#F5FCFF',
  },
  mybutton: {
    fontSize: 20,
  },
});