import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Row from '../row/index';

export default ({
  size
}) => (
  <View style={styles.board}>
    <Row />
    <Row />
    <Row />
  </View>
);