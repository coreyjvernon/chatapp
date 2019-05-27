// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';  
import Login from './components/Login';  
import Signup from './components/Signup';  
import Chat from './components/Chat';

export default createStackNavigator({  
  Login: { screen: Login },
  Signup: { screen: Signup },
  Chat: { screen: Chat }
});

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
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
