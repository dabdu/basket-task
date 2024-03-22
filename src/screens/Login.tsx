import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomButton, Header, InputField, PasswordInput} from '../components';
import {colors} from '../constants/theme';
import {useForm} from 'react-hook-form';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';
import {useAuthContext} from '../context/AuthContextProvider';
import Spinner from 'react-native-loading-spinner-overlay';
import {onLogin} from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}: any) => {
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const {control, handleSubmit} = useForm();
  const {setAuthUser} = useAuthContext();
  const onSubmit = async (data: any) => {
    setLoading(true);
    let postData = {
      username: data?.username?.toLowerCase(),
      password: data?.password,
    };
    try {
      let res = await onLogin(postData as any);
      setLoading(false);
      await AsyncStorage.setItem('user', JSON.stringify(res));
      setAuthUser(res);
      navigation.navigate('Account');
    } catch (error: any) {
      setLoading(false);
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: `${error}`,
        text2: 'Please Try Again',
      });
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: 'white',
      }}>
      <Spinner visible={loading} />
      <Header />
      {/* Description */}
      <View style={{paddingHorizontal: 30}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: colors.blue,
            textAlign: 'center',
          }}>
          Log into your account
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: colors.blue,
            textAlign: 'center',
            marginTop: 10,
            fontWeight: '500',
          }}>
          Enter your username and password to access your account or create an
          account
        </Text>
      </View>
      <View style={{width: '100%'}}>
        {/* Form Container */}

        <View style={{width: '100%'}}>
          {/* username */}
          <InputField
            name="username"
            placeholder="Enter Username"
            control={control}
            Icon={MaterialCommunityIcons}
            iconName="email-outline"
            rules={{
              required: 'username is required',
            }}
          />
          {/* Password */}
          <PasswordInput
            name="password"
            placeholder="Password"
            control={control}
            Icon={Feather}
            iconName="key"
            rules={{
              required: 'Password is required',
            }}
          />
          {/* REmember ME */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginVertical: 5,
            }}>
            <TouchableOpacity style={{}} onPress={() => setRemember(!remember)}>
              {remember ? (
                <AntDesign name="checksquare" size={24} color={colors.orange} />
              ) : (
                <Feather name="square" size={24} color={colors.orange} />
              )}
            </TouchableOpacity>
            <Text
              style={{
                color: 'gray',
                fontWeight: '500',
                fontSize: 18,
                marginLeft: 10,
              }}>
              Remember me
            </Text>
          </View>

          <View
            style={{width: '100%', paddingHorizontal: 20, marginVertical: 10}}>
            <CustomButton
              text="Login"
              bgColor={colors.blue}
              onPressBtn={handleSubmit(onSubmit)}
            />
          </View>
        </View>
        {/* Text */}
        <View>
          <Text
            style={{
              color: colors.orange,
              fontSize: 18,
              textDecorationColor: colors.orange,
              textDecorationLine: 'underline',
              fontWeight: '500',
              textAlign: 'center',
              marginVertical: 5,
            }}>
            Forgot Password
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 14,
              fontWeight: '500',
              textAlign: 'center',
              marginVertical: 5,
            }}>
            {'-- Or continue with --'}
          </Text>
        </View>

        {/* Facebook && GOOGLE */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.btnContainer}>
            <Entypo name="facebook" size={30} color={'blue'} />
            <Text style={styles.btnText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer}>
            <FontAwesome name="google" size={30} color={colors.orange} />
            <Text style={styles.btnText}>Google</Text>
          </TouchableOpacity>
        </View>
        {/* Don't Have an account */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500', color: colors.blue}}>
            Don't have an account?
          </Text>
          <Text style={{fontSize: 18, fontWeight: '500', color: colors.orange}}>
            Sign up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  btnContainer: {
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 5,
    paddingVertical: 8,
    marginVertical: 10,
  },
  btnText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: '600',
    marginLeft: 10,
  },
});
