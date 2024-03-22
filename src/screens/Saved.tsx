import {Text} from 'react-native';
import React from 'react';
import {Footer} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';

const Saved = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Saved</Text>
      <Footer active="Saved" />
    </SafeAreaView>
  );
};

export default Saved;
