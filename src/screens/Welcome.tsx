import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {welcomeBG} from '../constants/imports';
import {useNavigation} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {colors} from '../constants/theme';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      }}
      source={welcomeBG}>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(17,45,66, 0.7)',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}>
        {/* Upper */}
        <View></View>
        {/* Middle */}
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* ICON */}
          <View
            style={{
              height: 120,
              width: 120,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.orange,
              borderRadius: 100,
              marginBottom: 20,
            }}>
            <EvilIcons name="cart" size={40} color="white" />
            <Text style={{fontSize: 30, fontWeight: '600', color: 'white'}}>
              basket
            </Text>
          </View>
          {/* TEXT */}
          <View>
            <Text style={styles.text}>Start Shopping.</Text>
            <Text style={styles.text}>Stay Happy.</Text>
            <Text style={styles.text}>Anytime.</Text>
          </View>
        </View>
        {/* Bottom */}
        <View>
          {/* Text */}
          <Text style={styles.orangeText}>Basket Online Marketplace</Text>
          {/* NEXT, SKIP Container */}
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            {/* Skip */}
            <TouchableOpacity
              onPress={() => navigation.navigate('OnBoard' as never)}>
              <Text style={styles.orangeText}>Skip</Text>
            </TouchableOpacity>
            {/* Next */}
            <TouchableOpacity
              onPress={() => navigation.navigate('OnBoard' as never)}>
              <Text style={styles.orangeText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'white',
    marginVertical: 5,
    fontWeight: '500',
    textAlign: 'center',
  },
  orangeText: {
    fontSize: 20,
    color: colors.orange,
    fontWeight: '700',
    textAlign: 'center',
  },
});
