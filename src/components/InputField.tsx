import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import {colors} from '../constants/theme';

interface CustomInputProps {
  control: any;
  name: string;
  rules?: object;
  placeholder: string;
  type?: any;
  Icon: any;
  iconName: string;
}

const InputField: React.FC<CustomInputProps> = ({
  control,
  name,
  rules = {},
  placeholder,
  type,
  Icon,
  iconName,
}) => {
  let keyboard = type ? type : 'default';
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View style={{marginVertical: 5}}>
          <View style={styles.container}>
            <Icon name={iconName} size={30} color={colors.orange} />
            <TextInput
              value={value}
              onChangeText={text => onChange(text)}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              placeholderTextColor={'gray'}
              keyboardType={keyboard}
            />
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
    width: '100%',
    borderColor: colors.orange,
    borderBottomWidth: 1,
    marginTop: 8,
  },
  input: {
    width: '100%',
    fontSize: 18,
    fontWeight: '600',
    color: colors.blue,
    marginLeft: 10,
  },
});

export default InputField;
