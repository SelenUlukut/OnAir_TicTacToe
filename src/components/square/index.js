import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './style';

export default ({
  onPress,
  paddingVertical = 0,
  paddingHorizontal = 0,
}) => (
  <TouchableOpacity
    style={[
      styles.square,
      {paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical},
    ]}
    onPress={() => onPress()}>
  </TouchableOpacity>
);