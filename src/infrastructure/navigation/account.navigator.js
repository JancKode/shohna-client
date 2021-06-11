import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../features/account/screens/Login/Login';
import CreateAccount from '../../features/account/screens/CreateAccount/CreateAccount';
import OneTimePin from '../../features/account/screens/OnetimePin/OneTimePin';
import LoginSuccess from '../../features/account/screens/Login/Login-success';
import AccountScreen from '../../features/account/screens/Account.screen';

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="OneTimePin" component={OneTimePin} />
      {/* <Stack.Screen name="LoginSuccess" component={LoginSuccess} /> */}
    </Stack.Navigator>
  );
};

export default AccountNavigator;
