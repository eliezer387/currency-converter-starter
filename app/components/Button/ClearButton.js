import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Image source={require('./images/icon.png')} />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ClearButton;
