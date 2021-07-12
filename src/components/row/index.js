import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Square from '../square/index';

export default ({
  size
}) => (
  <View style={styles.board}>
    <Square
      onPress={() => console.log('button 1')}
    />
    <Square
      onPress={() => console.log('button 2')}
    />
    <Square
      onPress={() => console.log('button 3')}
    />
  </View>
);