import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import CustomButton from '../../../../components/forms/Button/button';
import Header from '../../../../components/header/header';
import {fonts} from '../../../../infrastructure/theme/fonts';

const OneTimePin = ({navigation, ...props}) => {
  const {t} = useTranslation();
  const otpFieldUnderlines = new Array(5).fill(0);
  const otpValidLength = 5;
  const otpNavParam = 'otp';
  const [otp, setOtp] = useState('');
  const inputRef = useRef(null);
  const isOtpValid = otp.length === otpValidLength;
  // const signupButtonValidStyle = isOtpValid ? '#2DA961' : '#F0F0F0';
  // const signupButtonTextValidStyle = isOtpValid ? '#FFFFFF' : '#B2B2B2';
  const {currentLang} = props.route.params;

  const handleInputPress = () => {
    inputRef.current.focus();
  };

  return (
    <Header title={t('general.activationLabel')} style={styles.image}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{t('general.activation')}</Text>
        <Text style={styles.inputLabel}></Text>
        <TouchableWithoutFeedback onPress={handleInputPress}>
          <View style={styles.codeContainer}>
            <TextInput
              autoCorrect={false}
              style={styles.textInput}
              onChangeText={thisOtp => setOtp(thisOtp)}
              ref={inputRef}
              maxLength={5}
              selectTextOnFocus={Platform.select({
                ios: true,
                android: true,
              })}
            />

            {otpFieldUnderlines.map((value, index) => {
              const nextOtp = otp.length === index;

              return (
                <View
                  style={[
                    styles.perOtpUnderlineContainer,
                    {borderBottomColor: nextOtp ? '#29405A' : '#262C2F'},
                  ]}
                  key={index}>
                  <Text style={styles.fakeTextInput}>{otp[index]}</Text>
                </View>
              );
            })}
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.inputLabel}>{t('general.resendText')}</Text>
      </View>
      <CustomButton
        label={t('actions.send')}
        onPress={() => navigation.goBack()}
      />
    </Header>
  );
};

export default OneTimePin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerBar: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBackIcon: {
    width: 6,
    height: 12,
  },
  headerBackIconButton: {
    position: 'absolute',
    left: 24,
  },
  previousScreenName: {
    textAlign: 'center',
    // fontFamily: defaultFont.weight.bold,
    fontSize: 14,
  },
  contentContainer: {
    paddingTop: 45,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  titleUnderlineContainer: {
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  titleText: {
    // fontFamily: defaultFont.weight.bold,
    fontSize: 22,
    lineHeight: 32,
    color: '#262C2F',
  },
  instructionsText: {
    marginTop: 12,
    // fontFamily: defaultFont.weight.medium,
    fontSize: 14,
    lineHeight: 24,
    color: '#808080',
  },
  inputContainer: {
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 20,
    color: 'white',
    fontFamily: fonts.medium,
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    height: 72,
    marginTop: 16,
  },
  perOtpUnderlineContainer: {
    borderBottomColor: '#B2B2B2',
    width: 45,
    borderBottomWidth: 2,
    marginHorizontal: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textInput: {
    display: 'none',
  },
  fakeTextInput: {
    // fontFamily: defaultFont.weight.bold,
    fontSize: 34,
    color: '#29405A',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  signupButton: {
    marginTop: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#2DA961',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  signupButtonText: {
    // fontFamily: defaultFont.weight.bold,
    fontSize: 14,
    lineHeight: 17,
    color: '#FFFFFF',
  },
  image: {
    height: 51.56,
    width: 165,
  },
});
