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
    this.props.onPressItem(this.props.id);
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

  _onPressItem = (id) => {
    console.log("item: " + id);
    this.props.navigate('ImageScreen', { item: this.props.data[id]})
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
      title={item["name_fr"]}
    />
  );

  render() {
    return (
      <FlatList
        style={styles.listcontainer}
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  listcontainer: {
    width: "100%",
  },
  mybuttoncontainer: {
    margin: 5,
    marginLeft:110,
    marginRight:110,
    padding: 10,
    height: 50,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#e7e7e7',
  },
});