import { Navigation } from 'react-native-navigation';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { registerScreens } from './screens';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'masterlol.Home',
    title: 'MasterLoL'
  },
  drawer: {
    left: {
      screen: 'masterlol.Home'
    }
  }
});
