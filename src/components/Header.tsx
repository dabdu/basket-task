import {View, Text} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {colors} from '../constants/theme';

const Header = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'flex-end', gap: 10}}>
      {/* Icon */}
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
      {/* TExt */}
      <Text style={{fontSize: 30, fontWeight: '600', color: colors.orange}}>
        basket
      </Text>
    </View>
  );
};

export default Header;
