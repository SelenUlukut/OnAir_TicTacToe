import React from 'react';
import { View, Text } from 'react-native';
import Board from '@components/Board';
import { connect } from 'react-redux';
import { setBoardSize, setSquare } from '@actions/board';
import styles from './style';

const Main = ({ board, setBoardSize }) => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.titleText}>Tic Tac Toe</Text>
      <Board />
    </View>
  );
}

const mapStateToProps = (state) => ({
  board: state.board,
});

export default connect(mapStateToProps, {
  setBoardSize,
  setSquare,
})(Main);