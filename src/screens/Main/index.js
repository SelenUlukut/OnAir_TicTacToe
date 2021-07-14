import React from 'react';
import { View, Text } from 'react-native';
import Board from '@components/Board';
import Win from '@components/Win';
import { connect } from 'react-redux';
import { setBoardSize, setSquare } from '@actions/board';
import styles from './style';

const Main = ({ board, setBoardSize }) => {
  let visible = false;
  if (board.winner) {
    visible = true;
  }
  return (
    <View style={styles.parentStyle}>
      <Win visible={visible} winner={board.winner} />
      <Text style={styles.titleText}>Tic Tac Toe</Text>
      <Board />
      <Text style={styles.titleText}>PLAYER: {board.turn}</Text>
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