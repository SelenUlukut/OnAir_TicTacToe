import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Board from '@components/Board';
import {connect} from 'react-redux';
import {setBoardSize} from '@actions/board';
import styles from './style';

const Main = ({board, setBoardSize}) => {
  console.log(board);
  return (
    <View style={styles.parentStyle}>
      <Pressable onPress={() => setBoardSize(board.size+1)} >
        <Text style={styles.titleText}>Tic Tac Toe</Text>
      </Pressable>
      <Board />
      <Text>{board.size}</Text>
    </View>
  );
}

const mapStateToProps = (state) => ({
  board: state.board,
});

export default connect(mapStateToProps, {
  setBoardSize,
})(Main);