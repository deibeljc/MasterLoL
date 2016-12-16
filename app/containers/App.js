import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { getTheme } from 'react-native-material-kit';

import Search from './Search';

const theme = getTheme();
// This is stupid and dumb.. lol
const items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export default class App extends Component {
  renderItems = (title) => {
    return (
      <View style={styles.container} key={title}>
        <View style={theme.cardStyle}>
          <Text style={theme.cardContentStyle}>
            {title}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </Text>
        </View>
      </View>
    )
  };

  render() {
    return (
      <View>
        {/* TODO: Have a global place for app colors */}
        <StatusBar
          backgroundColor="#f5f5f5"
          barStyle="dark-content"
        />
        <ScrollView style={styles.scroll}>
          {items.map((item, idx) => {
            return this.renderItems(idx);
          })}
        </ScrollView>
        <Search />
      </View>
    );
  }
}

/**
 * The styles of this component
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: 15,
    paddingBottom: 0
  }
});
