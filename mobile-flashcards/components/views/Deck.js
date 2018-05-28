import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  


  handleGoTo(destionation){
    this.props.navigation.navigate(
      destionation
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Deck title</Text>
        <Text>5 cards</Text>
        <Button 
        title="Add Card"
        onPress={() => {this.handleGoTo('AddCard')}}
        />
        <Button  
        title="Startd Quiz"
        onPress={() => {this.handleGoTo('Quiz')}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
    flexDirection : 'column',
  },
  title: {
   
    fontWeight:'bold',
    paddingBottom:5,
    paddingTop:25,
  }
});