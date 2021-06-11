import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';

import CustomTextInput from '../../../../components/forms/TextInput/text-input.component';
import Header from '../../../../components/header/header';
import {Spacer} from '../../../../components/spacer/spacer';

const Login = ({navigation, ...props}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const {t} = useTranslation();
  const {currentLang} = props.route.params;

  return (
    <Header>
      <Spacer position="top" size="xxxl">
        <View stye={styles.login}>
          <CustomTextInput
            placeholder={t('fields.mobileNumber')}
            value={mobileNumber}
            onChange={setMobileNumber}
            currentLang={currentLang}
          />
          <CustomTextInput
            placeholder={t('fields.password')}
            value={password}
            onChange={setPassword}
            currentLang={currentLang}
          />
          <Spacer position="top" size="xl">
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.goBack()}>
              <Text>{t('actions.login')}</Text>
            </TouchableOpacity>
          </Spacer>
        </View>
      </Spacer>
    </Header>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    width: 900,
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#ffffff',
    width: 328,
    alignContent: 'stretch',
    height: 40,
    borderRadius: 7,
    fontFamily: 'Cairo-Black',
  },
  button: {
    width: 328,
    height: 49,
    backgroundColor: '#FBB03B',
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
