import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './style';

export default ({
  onPress
}) => (
  <TouchableOpacity
    style={styles.square}
    onPress={() => onPress()}>
  </TouchableOpacity>
);