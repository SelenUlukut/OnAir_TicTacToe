import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Square from '../square/index';

export default ({
  size = 3
}) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(<Square
      onPress={() => console.log('button 2')}
    />);
  }
  return <View style={styles.row}>
    {array}
  </View>
}