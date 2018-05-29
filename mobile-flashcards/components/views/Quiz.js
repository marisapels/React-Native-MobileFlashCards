import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { clearLocalNotification, setLocalNotification } from '../../utils/notifications';


export default class Quiz extends React.Component {
  state = {
    mode:'question',
    current:1,
    deck:{name:'',questions:[]},
    correct:0
  }
  handleShowAnswer(){
  this.setState({'mode':'answer'});
}

handleRestart(){
  this.setState({'correct':0});
  this.setState({'current':1});
  this.setState({'mode':'question'});
}

handleTruthOrFalse(success){
  
  if (success){
    this.setState({correct:this.state.correct + 1});
  }

  if (this.state.deck.questions.length > this.state.current){
    this.setState({current:this.state.current + 1});
    this.setState({'mode':'question'})
  }else{
    clearLocalNotification()
      .then(setLocalNotification);
    this.setState({'mode':'score'});
  }
}



componentDidMount(){
  const deck = this.props.navigation.getParam('deck');
  this.setState({deck}); 
}

  render() {
    return (
      <View style={styles.container}>
              <Text style={styles.title}>{this.state.deck.name}</Text>
        {this.state.deck.questions.length === 0 ?
          <Text>No Quetions -> go back...</Text>
          :<Text>Question {this.state.current} of {this.state.deck.questions.length}</Text>
        }
      {this.state.mode==='question' 
      ? <View>

        <Text style={styles.question}>{this.state.deck.questions.length > 0 && this.state.deck.questions[this.state.current - 1].question}</Text>
        {this.state.deck.questions.length > 0 &&
        <Button 
        title="Show Answer" 
        //onPress={() => {this.handleSubmit()}}
        onPress={() => {this.handleShowAnswer()}}
        />}
      </View>
    :this.state.mode==='answer'
    ?  
    <View>
        <Text style={styles.question}>{this.state.deck.questions[this.state.current - 1].answer}</Text>
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
    <Text style={styles.question}>Your score is {this.state.correct} of {this.state.deck.questions.length}</Text>
    <Button 
    title="Restart Quiz" 
    //onPress={() => {this.handleSubmit()}}
    onPress={() => {this.handleRestart()}}
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