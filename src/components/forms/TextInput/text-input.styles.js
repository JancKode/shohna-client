import styled from 'styled-components/native';

import {Text, View, TextInput} from 'react-native';

export const Input = styled(TextInput)`
  width: 240px;
  background-color: ${props => props.theme.colors.text.white};
  height: 49px;
  border-radius: 7px;
  font-family: ${props => props.theme.fonts.regular};
  text-align: right;
  padding: 11px;
  color: ${props => 'white' || console.log(`props`, props)};
`;

export const InputWrapper = styled(View)`
  flex-direction: row;
`;

export const InputStyle = styled(View)`
  background-color: ${props => props.theme.colors.bg.primary};
  width: 338px;
  flex-direction: row-reverse;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;

export const CustomPlaceholder = styled(Text).attrs()`
  ${props => console.log('props', props)};
`;
