import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import Toast from 'react-native-toast-message';
import AuthContextProvider from './src/context/AuthContextProvider';
const App = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <AppNavigation />
        <Toast />
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default App;
