import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';

EStyleSheet.build({
  $primaryBlue: '#4F607A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#fff',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGrey: '#F0F0F0',
  $darkText: '#343434',

  outline: 0,
});

export default () => <Navigator />;
