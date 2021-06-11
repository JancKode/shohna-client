import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import roundCheck from '../../../../assets/icons/round-check.png';
import CustomButton from '../../../../components/forms/Button/button';
import Header from '../../../../components/header/header';

const LoginSuccess = ({navigation}) => {
  return (
    <Header>
      <Image source={roundCheck} />
      <CustomButton label="البدء" onPress={() => navigation.goBack()} />
    </Header>
  );
};

export default LoginSuccess;

const styles = StyleSheet.create({});
