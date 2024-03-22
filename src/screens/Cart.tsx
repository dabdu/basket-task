import {Text} from 'react-native';
import React from 'react';
import {Footer} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Cart</Text>
      <Footer active="Cart" />
    </SafeAreaView>
  );
};

export default Cart;
