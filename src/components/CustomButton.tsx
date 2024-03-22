import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../constants/theme';

interface CustomButtonProps {
  text: string;
  onPressBtn: () => void | any;
  bgColor?: string;
  Icon?: any;
  iconName?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onPressBtn,
  bgColor,
  Icon,
  iconName,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressBtn}
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: Icon ? 'flex-end' : 'center',
        backgroundColor: bgColor ? bgColor : colors.orange,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 20,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          textAlign: 'center',
          fontWeight: '500',
          marginRight: Icon ? 30 : 0,
        }}>
        {text}
      </Text>
      {Icon && <Icon name={iconName} color={colors.blue} size={30} />}
    </TouchableOpacity>
  );
};

export default CustomButton;
const styles = StyleSheet.create({});
