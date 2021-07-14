import React from 'react';
import { TouchableOpacity, Dimensions, Platform } from 'react-native';
import styles from './style';

export default ({
  onPress,
  size
}) => (
  <TouchableOpacity
    style={styles.square}
    onPress={() => onPress()}>
  </TouchableOpacity>
);