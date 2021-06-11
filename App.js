/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';

import RNBootSplash from 'react-native-bootsplash';

import {Navigation} from './src/infrastructure/navigation';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* <SafeAreaView style={styles.sectionContainer}> */}
      <Navigation />
      {/* </SafeAreaView> */}
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#29405A',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
