import React from 'react';
import { View } from 'react-native';
import Square from '@components/Square';
import styles from './style';

export default ({ size = 3, row }) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(
      <Square
        row={row}
        column={i}
        key={i}
      />
    );
  }
  return (
    <View style={styles.row}>
      {array}
    </View>
  )
}