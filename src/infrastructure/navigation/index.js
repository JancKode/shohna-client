import React from 'react';
import {View} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AccountNavigator from './account.navigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#29405A',
  },
};
export const Navigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <AccountNavigator />
    </NavigationContainer>
  );
};
