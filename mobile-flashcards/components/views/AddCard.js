import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { saveQuestions }   from '../../utils/storage';

export default class AddCard extends React.Component {

  state = {
    deck:{},
    question:'',
    answer:''
  }

  componentDidMount(){
    const deck = this.props.navigation.getParam('deck');
    this.setState({deck}); 
  }

  handleSubmit(){
    let deck = this.state.deck;

    deck.questions.push({question:this.state.question,answer:this.state.answer})
    saveQuestions(deck);
    this.props.navigation.navigate(
      'Deck',
      deck
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Please provide question & answer</Text>
        <TextInput
          style={styles.text}
          placeholder="Question"
          onChangeText={question => this.setState({ question })}
        />
        <TextInput
          style={styles.text}
          placeholder="Answer"
          onChangeText={answer => this.setState({ answer })}
        />
        <Button 
        title="Submit"
        onPress={() => {this.handleSubmit()}}
        />
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
  text : {
    padding: 10, borderWidth: 1, margin:5,
  }
});