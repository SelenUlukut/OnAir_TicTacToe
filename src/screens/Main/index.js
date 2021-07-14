import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Board from '@components/Board';
import Win from '@components/Win';
import { connect } from 'react-redux';
import { setBoardSize, setSquare, starGame } from '@actions/board';
import styles from './style';

const Button = ({text, onPress, disabled}) => (
  <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled}>
    <Text style={styles.buttonText} >
      {text}
    </Text>
  </TouchableOpacity>
)

const StartButton = ({onPress}) => (
  <TouchableOpacity style={styles.startButton} onPress={onPress}>
    <Text style={styles.buttonText} >
      {'START'}
    </Text>
  </TouchableOpacity>
)

const Main = ({ board, setBoardSize, starGame }) => {
  let visible = false;
  if (board.winner) {
    visible = true;
  }
  return (
    <View style={styles.parentStyle}>
      <Image style={styles.image} source={require('../../../assets/onairLogo.png')} />
      <Win visible={visible} winner={board.winner} />
      <Text style={styles.titleText}>Tic Tac Toe</Text>
      <Board />
      {board.started && <Text style={styles.titleText}>PLAYER: {board.turn}</Text>}
      {!board.started && 
        <>
          <View style={styles.styleBoardSizeController} >
            <Button text='-' onPress={() => setBoardSize(board.size-1)} disabled={board.size < 4} />
            <Text style={styles.buttonText} >
            {board.size}
            </Text>
            <Button text='+' onPress={() => setBoardSize(board.size+1)} disabled={board.size > 4} />
          </View>
          <StartButton onPress={() => starGame()} />
        </>
      }
    </View>
  );
}

const mapStateToProps = (state) => ({
  board: state.board,
});

export default connect(mapStateToProps, {
  setBoardSize,
  setSquare,
  starGame,
})(Main);