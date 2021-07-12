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
        paddingVertical={5}
      />
      <Square
        onPress={() => console.log('button 2')}
        paddingVertical={5}
      />
  </View>
);