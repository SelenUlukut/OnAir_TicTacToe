import React from 'react';
import { TouchableOpacity, Text, Dimensions } from 'react-native';
import styles from './style';
import { connect } from 'react-redux';
import { setSquare } from '@actions/board';

const Square = ({
  size,
  row,
  column,
  board,
  setSquare
}) => (
  <TouchableOpacity
    style={styles.square}
    onPress={() => setSquare({ i: row, j: column })}>
    <Text style={styles.squareText}>{board.gameBoard[row][column]}</Text>
  </TouchableOpacity>
);


const mapStateToProps = (state) => ({
  board: state.board,
});

export default connect(mapStateToProps, {
  setSquare,
})(Square);