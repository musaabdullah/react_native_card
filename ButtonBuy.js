import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
function ButtonBuy(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#236bbe',
        padding: 20,
        borderRadius: 30,
        width: 150,
        alignItems: 'center',
      }}>
      <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonBuy;
