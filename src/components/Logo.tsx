import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../constants/theme';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Logo = () => {
  return (
    <View
      style={{
        height: 50,
        width: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.orange,
        borderRadius: 100,
      }}>
      <EvilIcons name="cart" size={40} color="white" />
    </View>
  );
};

export default Logo;
