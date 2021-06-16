import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../features/account/screens/login/login';
import CreateAccount from '../../features/account/screens/createAccount/createAccount';
import OneTimePin from '../../features/account/screens/onetimePin/oneTimePin';
import LoginSuccess from '../../features/account/screens/login/login-success';
import AccountScreen from '../../features/account/screens/account.screen';
import BankForm from '../../features/bank/screens/bank-form/bank-form';
import NoInternet from '../../components/common/no-internet/no-internet';

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="OneTimePin" component={OneTimePin} />
      <Stack.Screen name="LoginSuccess" component={LoginSuccess} />
      <Stack.Screen name="BankForm" component={BankForm} />
      <Stack.Screen name="NoInternet" component={NoInternet} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
