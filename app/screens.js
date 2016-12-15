import { Navigation } from 'react-native-navigation';

import Home from './containers/App';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('masterlol.Home', () => Home, store, Provider);
}