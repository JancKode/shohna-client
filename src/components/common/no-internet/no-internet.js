import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useTranslation} from 'react-i18next';

import wifiOff from '../../../assets/icons/wifi-off.png';
import {fonts} from '../../../infrastructure/theme/fonts';
import {colors} from '../../../infrastructure/theme/colors';
import CustomButton from '../../forms/Button/button';
import {Spacer} from '../../spacer/spacer';

const NoInternet = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.noInternet}>
      <Image style={styles.wifiOff} source={wifiOff} />
      <Spacer position="top" size="xxl" />
      <Text style={styles.text}>{t('general.noInternet')}</Text>
      <Text style={styles.info}>{t('general.noInternetInfo')}</Text>
      <Spacer position="bottom" size="xxxl" />
      <CustomButton
        label={t('actions.tryAgain')}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  noInternet: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wifiOff: {},
  text: {
    color: '#FBB03B',
    fontSize: 19,
    fontFamily: fonts.medium,
  },
  info: {
    textAlign: 'center',
    color: colors.text.white,
    fontSize: 12,
    width: 225,
  },
});
