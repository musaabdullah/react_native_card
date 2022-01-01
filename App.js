import React, {Component} from 'react';
import {Shadow} from 'react-native-shadow-2';
import iumage from './first_change.jpg';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
  AvatarSource,
} from 'react-native-material-cards';
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
    <View style={styles.container}>
      <View style={{width: '90%', height: 330}}>
        <Card>
          <CardImage
            style={{height: 400}}
            source={{uri: 'http://placehold.it/480x270'}}
            title="Above all i am here"
          />
          <CardTitle
            avatarSource={require('./avater.jpg')}
            subtitleAbove={false}
            title="Title text"
            subtitle="subtitle text"
            style={{padding: 0, marginBottom: 0}}
          />
          <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
          <CardAction separator={true} inColumn={false}>
            <CardButton
              style={{
                backgroundColor: colors.facebook,
              }}
              titleStyle={{
                color: colors.white,
                padding: 8,
              }}
              onPress={() => {}}
              title="Push"
            />
            <CardButton
              style={{
                backgroundColor: colors.danger,
              }}
              titleStyle={{
                color: colors.white,
                padding: 8,
              }}
              onPress={() => {}}
              title="Later"
            />
          </CardAction>
        </Card>
      </View>
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
