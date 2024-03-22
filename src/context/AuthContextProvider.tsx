import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

type AuthContextType = {
  authUser: any;
  setAuthUser: React.Dispatch<React.SetStateAction<any>>;
  onLogout: () => Promise<void>;
  isLoggedIn: () => Promise<void>;
  logoutLoading: boolean;
  setLogoutLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [authUser, setAuthUser] = useState<any | null>(null);
  const [logoutLoading, setLogoutLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  const onLogout = async () => {
    try {
      setLogoutLoading(true);
      await AsyncStorage.removeItem('user');
      setAuthUser(null);
      navigation.reset({
        index: 0,
        routes: [{name: 'Welcome'}],
      } as never);
      Toast.show({
        topOffset: 60,
        type: 'success',
        text1: 'User Logout Successfully',
        text2: 'Please Login to Access Your Account',
      });
      setLogoutLoading(false);
    } catch (error: any) {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: `${error?.message}`,
        text2: 'Please Try Again',
      });
      setLogoutLoading(false);
    }
  };

  const isLoggedIn = async () => {
    let tempUser = await AsyncStorage.getItem('user');
    if (!tempUser) {
      setAuthUser(null);
      navigation.reset({
        index: 0,
        routes: [{name: 'Welcome'}],
      } as never);
    } else {
      setAuthUser(JSON.parse(tempUser));
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      } as never);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
        onLogout,
        isLoggedIn,
        logoutLoading,
        setLogoutLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'useAuthContext must be used within an AuthContextProvider',
    );
  }
  return context;
};
