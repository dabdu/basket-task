import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Controller} from 'react-hook-form';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../constants/theme';

interface PasswordInputProps {
  control: any;
  name: string;
  rules?: object;
  placeholder: string;
  type?: any;
  Icon: any;
  iconName: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  control,
  name,
  rules = {},
  placeholder,
  type,
  Icon,
  iconName,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  let keyboard = type ? type : 'default';
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View style={{marginVertical: 5, width: '100%'}}>
          <View style={styles.container}>
            <Icon name={iconName} size={30} color={colors.orange} />
            <TextInput
              value={value}
              onChangeText={text => onChange(text)}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={!isShowPassword}
              placeholderTextColor={'gray'}
              keyboardType={keyboard}
            />
            <View>
              {isShowPassword ? (
                <TouchableOpacity onPress={() => setIsShowPassword(false)}>
                  <Feather name="eye-off" size={20} color={'gray'} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setIsShowPassword(true)}>
                  <Feather name="eye" size={20} color={'gray'} />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    width: '100%',
    borderColor: colors.orange,
    borderBottomWidth: 1,
    marginTop: 8,
  },
  input: {
    width: '80%',
    fontSize: 18,
    fontWeight: '600',
    color: colors.blue,
    marginLeft: 10,
  },
});

export default PasswordInput;
