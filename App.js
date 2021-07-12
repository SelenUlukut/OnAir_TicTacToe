import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Board from './src/components/board/index';

export default function App() {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.titleText}>Tic Tac Toe</Text>
      <Board
        onPress={() => console.log('button 1')}
        paddingVertical={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  parentStyle: {
    height: 735,
    justifyContent: 'flex-start',
  },
  titleText: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
    marginTop: 50,
  },
});