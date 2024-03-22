import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../constants/theme';
import {Logo} from '.';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const AccountHeader = () => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: colors.blue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {/* Cart */}
      <Logo />
      {/* Input */}
      <View
        style={{
          width: '60%',
          height: 40,
          backgroundColor: 'white',
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          borderRadius: 5,
        }}>
        <Feather name="search" size={20} color="black" />
        <TextInput
          placeholder="Search in basket"
          placeholderTextColor={colors.blue}
          style={{marginLeft: 10}}
        />
      </View>
      {/* Hamburger */}
      <Ionicons name="menu" size={50} color={colors.orange} />
    </View>
  );
};

export default AccountHeader;
