import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {colors} from '../constants/theme';
import {CustomButton, Header} from '../components';
import {onBoardImg} from '../constants/imports';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
const OnBoard = ({navigation}: any) => {
  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.blue,
        width,
        height,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50,
        paddingTop: 20,
      }}>
      {/* Top Container */}
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Header />
        {/* Description */}
        <View style={{marginVertical: 40}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: 'white',
              textAlign: 'center',
            }}>
            Welcome to
          </Text>
          <Text
            style={{
              fontSize: 35,
              fontWeight: '700',
              color: 'white',
              textAlign: 'center',
            }}>
            basket online store
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              textAlign: 'center',
              marginTop: 10,
            }}>
            basket is the no1 online store for both the new and user products
          </Text>
        </View>
      </View>
      {/* Bottom Container */}
      <View style={{width: '100%'}}>
        <Image
          source={onBoardImg}
          style={{width: '100%', height: 270, marginBottom: 20}}
          resizeMode="contain"
        />

        <CustomButton
          text="Get Started"
          onPressBtn={() => navigation.navigate('Login')}
          Icon={AntDesign}
          iconName={'arrowright'}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoard;
