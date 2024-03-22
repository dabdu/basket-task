import {Text} from 'react-native';
import React from 'react';
import {Footer} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Footer active="Home" />
    </SafeAreaView>
  );
};

export default Home;
