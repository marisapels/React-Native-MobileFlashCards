import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  
  state = {
    deck:{name:'',questions:[]},
  }

  componentDidMount(){
    
    const deck = this.props.navigation.getParam('deck');
    this.setState({deck}); 
   
  }

  handleGoTo(destionation){
    const deck = this.state.deck;
    this.props.navigation.navigate(
      destionation,{deck}
    )
  }

  render() {
   
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.deck.name}</Text>
        <Text>{this.state.deck.questions.length} cards</Text>
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