import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import axios from 'axios';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
const AppContainer = createAppContainer(RootStack);


// export default function App() {

  
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app yo!</Text>
//     </View>
//   );
// }

// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default AppContainer;

AppRegistry.registerComponent('Numu App SpaceX', () => AppContainer);