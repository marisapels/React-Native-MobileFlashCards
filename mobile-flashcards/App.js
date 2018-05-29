import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationStack from './components/NavigationStack';
import { setLocalNotification } from './utils/notifications';

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification();
  }
  render() {
    return (
      <NavigationStack />
    );
  }
}

