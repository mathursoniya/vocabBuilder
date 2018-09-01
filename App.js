import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';
import Card from './Card';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardsArray: [
        {
          id: '1',
          title: 'Card 1',
          backgroundColor: '#039BE5',
        },

        {
          id: '2',
          title: 'Card 2',
          backgroundColor: '#E65100',
        },

        {
          id: '3',
          title: 'Card 3',
          backgroundColor: '#795548',
        },

        {
          id: '4',
          title: 'Card 4',
          backgroundColor: '#0D47A1',
        },

        {
          id: '5',
          title: 'Card 5',
          backgroundColor: '#546E7A',
        },
      ],
      showNoMoreCardsView: false,
    };
  }

  componentDidMount() {
    this.setState({ cardsArray: this.state.cardsArray.reverse() });

    if (this.state.cardsArray.length === 0) {
      this.setState({ showNoMoreCardsView: true });
    }
  }

  removeCard(id) {
    this.state.cardsArray.splice(
      this.state.cardsArray.findIndex(x => x.id === id),
      1,
    );

    this.setState({ cardsArray: this.state.cardsArray }, () => {
      if (this.state.cardsArray.length === 0) {
        this.setState({ showNoMoreCardsView: true });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.cardsArray.map((item, key) => (
          <Card
            item={item}
            key={key}
            removeCard={this.removeCard.bind(this, item.id)}
          />
        ))}
        {this.state.showNoMoreCardsView ? (
          <View style={styles.container}>
            <Text style={{ fontSize: 20, color: 'black' }}>
No More Cards
            </Text>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  card: {
    width: '80%',
    height: '50%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },

  cardTitle: {
    color: 'white',
    fontSize: 25,
  },

  leftText: {
    position: 'absolute',
    top: 20,
    right: 30,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'transparent',
  },

  rightText: {
    position: 'absolute',
    top: 20,
    left: 30,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'transparent',
  },
});
