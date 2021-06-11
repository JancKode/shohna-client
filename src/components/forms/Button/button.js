import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Spacer} from '../../spacer/spacer';
import {fonts} from '../../../infrastructure/theme/fonts';

const CustomButton = ({label, onPress}) => {
  return (
    <Spacer position="top" size="xl">
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </Spacer>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: 328,
    height: 49,
    backgroundColor: '#FBB03B',
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontFamily: fonts.bold,
  },
});
