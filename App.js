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

const now = new Date();
const CARDS = [
  {
    image: {
      uri: 'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg',
    },
    title:
      'Mollit reprehenderit ex aute pariatur proident laboris excepteur id esse. Deserunt nulla nulla laboris ipsum qui ipsum voluptate fugiat nisi eiusmod nisi fugiat voluptate. In ullamco enim laborum tempor do sint amet officia velit duis et. Labore commodo irure commodo aliquip irure cillum excepteur est laboris occaecat dolore et velit. Consequat deserunt aliquip dolor ad. Aliqua et adipisicing sunt voluptate ipsum magna magna fugiat officia tempor dolor velit.',
    height: 300,
    renderItem: ({item, index}) => (
      <View style={{marginVertical: 15}}>
        <Text
          style={{
            paddingHorizontal: 10,
            fontWeight: 'bold',
            fontSize: 15,
            color: 'black',
          }}>
          Customizable Content
        </Text>
      </View>
    ),
  },

  {
    image: {
      uri: 'http://www.gamespersecond.com/media/2011/07/battlefield-3-poster.jpg',
    },
    title:
      'Mollit reprehenderit ex aute pariatur proident laboris excepteur id esse. Deserunt nulla nulla laboris ipsum qui ipsum voluptate fugiat nisi eiusmod nisi fugiat voluptate. In ullamco enim laborum tempor do sint amet officia velit duis et. Labore commodo irure commodo aliquip irure cillum excepteur est laboris occaecat dolore et velit. Consequat deserunt aliquip dolor ad. Aliqua et adipisicing sunt voluptate ipsum magna magna fugiat officia tempor dolor velit.',
    height: 300,
    renderItem: ({item, index}) => (
      <View style={{marginVertical: 15}}>
        <Text
          style={{
            paddingHorizontal: 10,
            fontWeight: 'bold',
            fontSize: 15,
            color: 'black',
          }}>
          Image date
        </Text>
      </View>
    ),
  },
];
const App = () => {
  return (
    <CardList
      listProps={{
        ListHeaderComponent: () => (
          <View style={{padding: 16, paddingBottom: 0}}>
            <Text
              style={{
                fontSize: 13,
                color: 'rgba(0, 0, 0, 0.5)',
              }}>
              {now.toDateString()}
            </Text>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>Featured</Text>
          </View>
        ),
      }}
      data={CARDS}
      renderItem={({item, index}) => {
        if (item.renderItem) return item.renderItem({item, index});

        return (
          <View>
            <Text>Default Content</Text>
          </View>
        );
      }}
      renderDetails={({item, index}) => (
        /* You can also provide custom content per item */
        <View style={{paddingVertical: 30, paddingHorizontal: 16}}>
          <Text style={{color: 'rgba(0, 0, 0, 0.7)', fontSize: 18}}>
            {item.title}
          </Text>
        </View>
      )}
    />
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
