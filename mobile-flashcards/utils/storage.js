import { AsyncStorage } from 'react-native';

export function saveDeckTitle(deck) {   
AsyncStorage.getItem('Decks').then((decks) => {
   let _decks = JSON.parse(decks);
   _decks.push(deck);
    AsyncStorage.setItem('Decks',JSON.stringify(_decks))
    }
    )
}

export function getDecks(){
    return AsyncStorage.getItem('Decks');
}