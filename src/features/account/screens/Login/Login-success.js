import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useTranslation} from 'react-i18next';

import roundCheck from '../../../../assets/icons/round-check.png';
import CustomButton from '../../../../components/forms/Button/button';
import Header from '../../../../components/header/header';
import {Spacer} from '../../../../components/spacer/spacer';
import {fonts} from '../../../../infrastructure/theme/fonts';
import {colors} from '../../../../infrastructure/theme/colors';

const LoginSuccess = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <View style={{flex: 1}}>
      <Spacer position="top" size="xxl" />
      <Header>
        <View style={styles.loginSuccess}>
          <Spacer position="top" size="xxxl" />
          <View style={styles.info}>
            <Image source={roundCheck} />
            <Spacer position="bottom" size="xxl" />

            <Text style={styles.successLabel}>{t('general.success')}</Text>
            <Spacer position="bottom" size="medium" />
            <Text style={styles.successInfo}>{t('general.successInfo')}</Text>
          </View>
        </View>
        <CustomButton
          label={t('actions.start')}
          onPress={() => navigation.goBack()}
        />
      </Header>
    </View>
  );
};

export default LoginSuccess;

const styles = StyleSheet.create({
  loginSuccess: {
    display: 'flex',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  successLabel: {
    fontSize: 25,
    color: colors.text.white,
    fontFamily: fonts.medium,
  },
  successInfo: {
    fontSize: 12,
    color: colors.text.white,
    fontFamily: fonts.medium,
    textAlign: 'center',
    width: 252,
  },
});
