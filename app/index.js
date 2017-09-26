import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
    $primaryBlue: '#4F607A',
    $white: '#fff'
});

import Home from './screens/Home';

export default () => <Home />;
