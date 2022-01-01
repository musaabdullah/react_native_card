import React, {Component} from 'react';
import CardList from 'react-native-card-animated-modal';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ButtonBuy from './ButtonBuy';
import Cancel from './Cancel';
import colors from './colors';

const App = () => {
  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dddddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    borderRadius: 10,
    backgroundColor: 'whitesmoke',
  },
});

export default App;
