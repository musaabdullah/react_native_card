import React, {Component} from 'react';
import {Shadow} from 'react-native-shadow-2';
import iumage from './first_change.jpg';
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

const App = () => {
  return (
    <View style={styles.container}>
      <Shadow>
        <View
          style={{
            width: '90%',
            borderRight: 10,
            backgroundColor: 'whitesmoke',
            borderRadius: 15,
          }}>
          <View>
            <Image
              source={require('./first_change.jpg')}
              resizeMode="stretch"
              style={{
                width: '100%',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                height: 180,
                position: 'relative',
              }}
            />

            <View style={{position: 'absolute', bottom: 20, right: 20}}>
              <View
                style={{
                  backgroundColor: '#ebddd8',
                  padding: 10,
                  borderRadius: 50,
                }}>
                <Image
                  source={require('./image.png')}
                  style={{width: 25, height: 25}}
                />
              </View>
            </View>
          </View>
          <View style={{padding: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                overflow: 'hidden',
                alignItems: 'center',
                marginBottom: 12,
              }}>
              <View>
                <Text style={{fontSize: 18, color: 'black'}}>
                  Ipsum anim aute nulla
                </Text>
                <Text style={{fontSize: 18, color: 'black'}}>$ 59.78</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#ecedf3',
                  padding: 20,
                  borderRadius: 30,
                }}>
                <Text style={{color: '#509cd8'}}>Check Status</Text>
              </View>
            </View>

            <View>
              <Text style={{textAlign: 'justify', lineHeight: 18}}>
                Ea ipsum elit sit eu mollit nisi labore voluptate dolor ut
                officia eu. Fugiat Lorem nisi anim dolore ut fugiat cupidatat
                nulla ut laboris. Esse dolor incididunt est excepteur.
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 18,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#db261e',
                  padding: 20,
                  borderRadius: 30,
                  width: 150,
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
                  Cancel
                </Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
                style={{
                  backgroundColor: '#236bbe',
                  padding: 20,
                  borderRadius: 30,
                  width: 150,
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
                  Buy Now
                </Text>
              </TouchableOpacity> */}
              <ButtonBuy text="Buy Now" />
            </View>
          </View>
        </View>
      </Shadow>
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
