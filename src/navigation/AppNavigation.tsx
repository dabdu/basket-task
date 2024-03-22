import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {Account, Cart, Home, Login, OnBoard, Saved, Welcome} from '../screens';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Welcome">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          animation: 'fade_from_bottom',
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{animation: 'fade_from_bottom'}}
      />

      <Stack.Screen
        name="OnBoard"
        component={OnBoard}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Saved"
        component={Saved}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{animation: 'fade_from_bottom'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
