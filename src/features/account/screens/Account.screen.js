import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useTranslation} from 'react-i18next';

import Header from '../../../components/header/header';
import {SafeArea} from '../../../components/utils/safe-area';
import {Spacer} from '../../../components/spacer/spacer';

const options = [
  {label: 'English', value: 'en'},
  {label: 'Arabic', value: 'ar'},
];

const AccountScreen = ({navigation}) => {
  const {i18n} = useTranslation();
  const [currentLang, setCurrentLang] = useState('');

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [currentLang, i18n.language]);

  return (
    <>
      <Spacer position="top" size="xxxl" />
      <Header>
        <SafeArea>
          <View style={styles.accountContainer}>
            <Button
              title="Login"
              onPress={() => navigation.navigate('Login', {currentLang})}
            />
            <Button
              title="Create Account"
              onPress={() =>
                navigation.navigate('CreateAccount', {currentLang})
              }
            />
            <Button
              title="One Time Pin"
              onPress={() => navigation.navigate('OneTimePin', {currentLang})}
            />
            <Button
              title="Login Success"
              onPress={() => navigation.navigate('LoginSuccess', {currentLang})}
            />
            <Button
              title="Bank Form"
              onPress={() => navigation.navigate('BankForm', {currentLang})}
            />
          </View>
          <View>
            {options.map(lang => {
              return (
                <Button
                  key={lang.value}
                  title={lang.label}
                  onPress={() => {
                    setCurrentLang(lang.value);
                    i18n.changeLanguage(lang.value);
                  }}
                />
              );
            })}
          </View>
        </SafeArea>
      </Header>
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  accountContainer: {
    backgroundColor: '#29405A',
    padding: 4,
    marginTop: 2,
    flex: 1,
  },
});
