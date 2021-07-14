import React from 'react';
import { TouchableOpacity, Text, Dimensions } from 'react-native';
import styles from './style';
import { connect } from 'react-redux';
import { setSquare } from '@actions/board';

const boardWidth = Dimensions.get('window').width-50;

const Square = ({
  row,
  column,
  board,
  setSquare
}) => {
  const style = {
    height: boardWidth/board.size,
    width: boardWidth/board.size,
  }
  return(
    <TouchableOpacity
      style={[styles.square, style]}
      disabled={!board.started}
      onPress={() => setSquare({ i: row, j: column })}>
      <Text style={styles.squareText}>{board.started ? board.gameBoard[row][column] : ''}</Text>
    </TouchableOpacity> 
  )
};


const mapStateToProps = (state) => ({
  board: state.board,
});

export default connect(mapStateToProps, {
  setSquare,
})(Square);