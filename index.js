/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import flatList from './pages/FlatListDemo';
import {name as appName} from './app.json';
// import {StackNavigator} from 'react-navigation';

// const AppRoot = StackNavigator({
//   App: {
//     screen: App,
//   },
//   flatList: {
//     screen: FlatListDemo,
//     navigatorOptions: {
//       title: 'FlatListDemo',
//     },
//   },
// });

AppRegistry.registerComponent(appName, () => App);
