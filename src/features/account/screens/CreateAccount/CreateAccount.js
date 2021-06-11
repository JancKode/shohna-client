import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Header from '../../../../components/header/header';
import CustomTextInput from '../../../../components/forms/TextInput/text-input.component';
import {Spacer} from '../../../../components/spacer/spacer';
import CustomButton from '../../../../components/forms/Button/button';

const CreateAccount = ({navigation, ...props}) => {
  const {t} = useTranslation();
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');
  const [photo, setPhoto] = useState('');
  const [licensePhoto, setLicensePhoto] = useState('');
  const [carPhoto, setCarPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const {currentLang} = props.route.params;

  return (
    <Header title={t('general.title')}>
      <ScrollView>
        <Spacer position="top" size="xl">
          <View style={styles.createAccount}>
            <CustomTextInput
              placeholder={t('fields.name')}
              value={name}
              onChange={setName}
              currentLang={currentLang}
            />
            <CustomTextInput
              placeholder={t('fields.mobileNumber')}
              value={mobileNumber}
              onChange={setMobileNumber}
              currentLang={currentLang}
            />

            <CustomTextInput
              placeholder={t('fields.gender')}
              value={gender}
              onChange={setGender}
              currentLang={currentLang}
            />
            <CustomTextInput
              placeholder={t('fields.photoId')}
              value={photo}
              onChange={setPhoto}
              currentLang={currentLang}
            />
            <CustomTextInput
              placeholder={t('fields.photoLicense')}
              value={licensePhoto}
              onChange={setLicensePhoto}
              currentLang={currentLang}
            />
            <CustomTextInput
              placeholder={t('fields.photoCar')}
              value={carPhoto}
              onChange={setCarPhoto}
              currentLang={currentLang}
            />
            <CustomTextInput
              placeholder={t('fields.password')}
              value={password}
              onChange={setPassword}
              currentLang={currentLang}
            />
            <CustomTextInput
              placeholder={t('fields.repeatPassword')}
              value={repeatPassword}
              onChange={setRepeatPassword}
              currentLang={currentLang}
            />
            <Spacer position="top" size="large">
              <View style={styles.subDescriptionWrapper}>
                <Text style={styles.subDescription}>
                  {t('general.agreement')}
                </Text>
              </View>
            </Spacer>
            <CustomButton
              label={t('actions.register')}
              onPress={() => navigation.goBack()}
            />
          </View>
        </Spacer>
      </ScrollView>
      <View
        style={
          currentLang === 'en'
            ? [styles.subDescriptionWrapper, {flexDirection: 'row-reverse'}]
            : styles.subDescriptionWrapper
        }>
        <TouchableOpacity>
          <Text style={styles.subDescription}>{t('actions.login')}</Text>
        </TouchableOpacity>
        <Text style={styles.subDescription}>{t('general.haveAccount')}</Text>
      </View>
    </Header>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  createAccount: {
    flex: 1,
    justifyContent: 'center',
  },
  subDescriptionWrapper: {
    alignSelf: 'center',
    width: 323,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subDescription: {
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
  },
});
