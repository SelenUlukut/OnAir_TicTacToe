import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { setBoardSize, setSquare } from '@actions/board';
import styles from './style';
import Row from '@components/Row';

const Board = ({board}) => {
  const array = [];
  for (let i = 0; i < board.size; i++) {
    array.push(<Row key={i} size={board.size} row={i} />);
  }
  return (
    <View style={styles.board}>
      {array}
    </View>
  )
}

const mapStateToProps = (state) => ({
  board: state.board,
});

export default connect(mapStateToProps, {
  setBoardSize,
  setSquare,
})(Board);