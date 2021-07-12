import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Row from '../row/index';

export default ({
  size = 3
}) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(<Row />);
  }
  return <View style={styles.board}>
    {array}
  </View>
}