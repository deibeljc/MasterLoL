import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.searchContainer}>
        <Icon
          name='search'
          size={15}
          color='#9e9e9e'
        />
        <TextInput
          style={styles.search}
          underlineColorAndroid='transparent'
          placeholder='Search by Champion or Role'
          clearTextOnFocus={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  search: {
    width: 200,
    paddingLeft: 10
  }
});