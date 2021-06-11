import React, {useEffect} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {Spacer} from '../../spacer/spacer';

const CustomTextInput = ({
  placeholder,
  onChange,
  onEndEdit,
  onFocus,
  value,
  isRequired,
  currentLang,
}) => {
  useEffect(() => {}, [currentLang]);

  return (
    <Spacer position="bottom" size="large">
      <View style={styles.textInput}>
        <View
          style={
            currentLang === 'en'
              ? [styles.inputWrapper, {flexDirection: 'row'}]
              : styles.inputWrapper
          }>
          <Text style={value ? styles.placeholder : styles.default}>
            {placeholder}
          </Text>
          <TextInput
            required={isRequired}
            autoCapitalize="none"
            autoCorrect={false}
            style={
              currentLang === 'en'
                ? [styles.textInputStyle, {textAlign: 'left'}]
                : styles.textInputStyle
            }
            onChangeText={onChange}
            onEndEditing={onEndEdit}
            onFocus={onFocus}
            value={value}
          />
        </View>
      </View>
    </Spacer>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    flexDirection: 'row',
  },
  inputWrapper: {
    width: 338,
    flexDirection: 'row-reverse',
    borderRadius: 7,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#FBB03B',
    borderWidth: 2,
  },
  textInputStyle: {
    width: 220,
    height: 49,
    textAlign: 'right',
    backgroundColor: 'white',
    borderRadius: 7,
  },
  placeholder: {
    color: '#29405A',
    paddingHorizontal: 7,
  },
  default: {
    color: '#CACED3',
    paddingHorizontal: 7,
  },
});
