import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import logo from '../../assets/icons/shohna.png';
import {colors} from '../../infrastructure/theme/colors';
import {fonts, fontSizes} from '../../infrastructure/theme/fonts';
import {Spacer} from '../spacer/spacer';
import {SafeArea} from '../utils/safe-area';

const Header = ({children, title, style}) => {
  return (
    <SafeArea>
      <View style={styles.header}>
        <Image style={[styles.image, style]} source={logo} />
        {title ? (
          <Spacer position="top" size="xl">
            <Text style={styles.title}>{title}</Text>
          </Spacer>
        ) : null}
        {children}
      </View>
    </SafeArea>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontFamily: fonts.medium,
    color: colors.text.white,
    fontSize: fontSizes.title,
  },
});
