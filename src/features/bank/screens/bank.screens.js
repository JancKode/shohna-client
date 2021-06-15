import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {useTranslation} from 'react-i18next';

const BankDetails = () => {
  const {i18n} = useTranslation();
  const [currentLang, setCurrentLang] = useState('');

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [currentLang, i18n.language]);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default BankDetails;

const styles = StyleSheet.create({});
