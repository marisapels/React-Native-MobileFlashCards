import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { saveDeckTitle }   from '../../utils/storage';

export default class App extends React.Component {

  state = {
    deckName:''
  }

  handleSubmit(){
    const deck = {name:this.state.deckName,questions: []}

    saveDeckTitle(deck)
   // .then(() => {
   //   this.props.navigation.navigate(
   //     'Deck',
   //     { deck }
   //   )})
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{ padding: 10, borderWidth: 1}}
          placeholder="Deck Title"
          onChangeText={deckName => this.setState({ deckName })}
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
});