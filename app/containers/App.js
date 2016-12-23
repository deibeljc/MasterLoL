import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';

import Search from './Search';
import ChampionCard from './ChampionCard';

// This is stupid and dumb..
const items = [0, 0, 0, 0, 0, 0];

export default class App extends Component {
  renderItems = (index) => {
    return (
      <ChampionCard key={index} index={index} />
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
        <ScrollView
          style={styles.container}
          automaticallyAdjustContentInsets={false}
        >
          <View style={styles.scrollView}>
            {items.map((item, idx) => {
              return this.renderItems(idx);
            })}
          </View>
        </ScrollView>
        <Search />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1'
  },
  scrollView: {
    paddingTop: 6,
    paddingBottom: 5
  }
});