import React from 'react';
import createStackNavigator from 'react-navigation/src/navigators/createStackNavigator';

import Deck from './views/Deck';

import AddCard from './views/AddCard';
import Quiz from './views/Quiz';
import NewDeck from './views/NewDeck';
import DeckList from './views/DeckList'

const NavigationStack = createStackNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions : {
            headerTitle: "Decks"
            }
        },
    Deck: {
        screen: Deck,
        navigationOptions : {
            headerTitle: "Deck"
        }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions : {
            headerTitle: "Add Card"
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions : {
            headerTitle: "Quiz"
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions : {
            headerTitle: "Add Deck"
        }
    }
})

export default NavigationStack;