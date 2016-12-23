import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { getTheme } from 'react-native-material-kit';

const theme = getTheme();

export default class ChampionCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[theme.cardStyle, styles.cardStyle]}>
          <Text style={theme.cardContentStyle}>
            {this.props.index}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </Text>
        </View>
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
    paddingBottom: 5,
    paddingTop: 5
  },
  cardStyle: {
    elevation: 1,
  }
});