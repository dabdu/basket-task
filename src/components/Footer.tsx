import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../constants/theme';
import menuItems from '../constants/data/menuItems';

interface FooterProps {
  active: string;
}
const Footer: React.FC<FooterProps> = ({active}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#F4F4F4',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(item.path as never)}>
          <item.Icon
            name={item.name}
            size={30}
            color={item.path === active ? colors.orange : 'black'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Footer;
