import React from 'react';
import { getDecks }   from '../../utils/storage';
import { AsyncStorage } from 'react-native';


import { 
  StyleSheet, Text, View, 
  ScrollView, TouchableOpacity 
} from 'react-native';

export default class DeckList extends React.Component {
  
  state = {
    decks:[]
  }

  handleDeckPress(destionation = 'Deck',deck){
    this.props.navigation.navigate(
      destionation,{deck}
    )
  }

  componentDidMount = () => {
    AsyncStorage.getItem('Decks').then((_decks) => {
      let decks = JSON.parse(_decks);
   
      this.setState({decks});
  
      }
    )
  }

  render() {

    
    return (
      <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollView}>
     
          
  

          {this.state.decks.map(deck => (
          
                <TouchableOpacity key={deck.name} style={styles.deck} onPress={() => this.handleDeckPress('Deck',deck)}>
                    <Text style={styles.title}>{deck.name}</Text>
                    <Text>{deck.questions.length} cards</Text>
                </TouchableOpacity>
            ))}

              <TouchableOpacity style={styles.deckAdd} onPress={() => this.handleDeckPress('NewDeck')}>
                  <Text style={styles.title}>Add Deck</Text>
              </TouchableOpacity>    
              
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    padding:5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    flexDirection : 'row',
    padding:10
  },
  deck : {
    flex: 1,
    backgroundColor:'#f0f0f0',
    padding:20,
    alignItems: 'center',
    marginTop:10
  },
  deckAdd : {
    flex: 1,
    backgroundColor:'lime',
    padding:20,
    alignItems: 'center',
    marginTop:10
  },
  title : {
    fontWeight: 'bold'
  }
});