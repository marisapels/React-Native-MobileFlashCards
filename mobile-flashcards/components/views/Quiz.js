import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Quiz extends React.Component {
  state = {
    mode:'question',
    current:1,
    total:4
  }
  handleShowAnswer(){
  this.setState({'mode':'answer'});
}

handleTruthOrFalse(success){
  if (success){
    this.setState({'mode':'question'});
  }else{
    this.setState({'mode':'score'});
  }
}

  render() {
    return (
      <View style={styles.container}>
              <Text style={styles.title}>Deck Name</Text>
        <Text>Question {this.state.current} of {this.state.total}</Text>
      {this.state.mode==='question' 
      ? <View>

        <Text style={styles.question}>Wich is best dog bread in the world?</Text>
        <Button 
        title="Show Answer" 
        //onPress={() => {this.handleSubmit()}}
        onPress={() => {this.handleShowAnswer()}}
        />
      </View>
    :this.state.mode==='answer'
    ?  
    <View>
        <Text style={styles.question}>Staffordshire Bullterrier</Text>
        <Button 
        title="Yes :)" 
        //onPress={() => {this.handleSubmit()}}
        onPress={() => {this.handleTruthOrFalse(true)}}
        />
        <Button 
        title="No :(" 
        //onPress={() => {this.handleSubmit()}}
        onPress={() => {this.handleTruthOrFalse(false)}}
        />
      </View>
    :
    <View>
    <Text style={styles.question}>Your score is 2 of {this.state.total}</Text>
    <Button 
    title="Restart Quiz" 
    //onPress={() => {this.handleSubmit()}}
    onPress={() => {this.handleTruthOrFalse(true)}}
    />
    <Button 
    title="Go to Deck View" 
    //onPress={() => {this.handleSubmit()}}
    onPress={() =>  this.props.navigation.navigate(
      'Deck'
    )}
    />
  </View>

    }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      margin: 0, padding: 20,
      flexDirection: 'column',
      alignItems: 'stretch',
      backgroundColor: '#fff',
  },
  title : {
    fontWeight: 'bold'
  },
  question : {
    padding: 20,
    fontSize: 25,
  },
});