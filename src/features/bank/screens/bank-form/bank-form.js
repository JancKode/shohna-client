import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import CustomTextInput from '../../../../components/forms/TextInput/text-input.component';
import {useTranslation} from 'react-i18next';
import CustomButton from '../../../../components/forms/Button/button';
import cardImage from '../../../../assets/images/cards/Card.png';
import {colors} from '../../../../infrastructure/theme/colors';
import {fonts} from '../../../../infrastructure/theme/fonts';

const BankForm = ({navigation, ...props}) => {
  const {t} = useTranslation();
  const {currentLang} = props.route.params;
  return (
    <View style={styles.bankDetails}>
      <Image source={cardImage} />
      <CustomTextInput
        placeholder={t('fields.bankName')}
        currentLang={currentLang}
      />
      <CustomTextInput
        placeholder={t('fields.accountName')}
        currentLang={currentLang}
      />
      <CustomTextInput
        placeholder={t('fields.accountNumber')}
        currentLang={currentLang}
      />

      <Text style={styles.bankAgreement}>{t('general.bankAgreement')}</Text>
      <CustomButton
        label={t('actions.next')}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default BankForm;

const styles = StyleSheet.create({
  bankDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bankAgreement: {
    color: colors.text.white,
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
});
