import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AccountHeader, Footer} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../constants/theme';
import {useAuthContext} from '../context/AuthContextProvider';
import accountItems from '../constants/data/accountItems';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-loading-spinner-overlay';
const Account = () => {
  const {authUser, logoutLoading, onLogout} = useAuthContext();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Spinner visible={logoutLoading} />
      <AccountHeader />
      {/* Container */}
      <ScrollView
        style={{
          width: '100%',
        }}>
        {/* Top OverLay */}
        <View
          style={{
            width: '100%',
            height: 180,
            backgroundColor: colors.orange,
            paddingHorizontal: 20,
            paddingTop: 40,
          }}>
          {/* PRofile */}
          {authUser && (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/* Image */}
              <Image
                source={{uri: authUser?.image}}
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 100,
                  borderWidth: 2,
                  borderColor: 'white',
                }}
              />
              <View style={{marginLeft: 20}}>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'black',
                    fontWeight: '500',
                  }}>{`${authUser?.firstName} ${authUser?.lastName}`}</Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    fontWeight: '500',
                  }}>{`${authUser?.email}`}</Text>
              </View>
            </View>
          )}
        </View>
        {/* Menu COntainer */}
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 50,
            marginTop: -120,
            zIndex: 1000,
          }}>
          <View
            style={{
              width: '90%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 50,
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <View>
              {accountItems.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 20,
                  }}>
                  <item.Icon name={item.name} size={30} color={colors.orange} />
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      fontSize: 20,
                      marginLeft: 20,
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 20,
                }}
                onPress={() => onLogout()}>
                <MaterialCommunityIcons
                  name="logout"
                  size={24}
                  color={colors.orange}
                />
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '500',
                    fontSize: 20,
                    marginLeft: 20,
                  }}>
                  {'Logout'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer active="Account" />
    </SafeAreaView>
  );
};

export default Account;
