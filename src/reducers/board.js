import { SET_BOARD_SIZE, SET_SQUARE } from '@actions/types';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const initializeGame = (size = 3) => {
  const gameBoard = [];
  for (let i = 0; i < size; i++) {
    gameBoard[i] = [];
    for (let j = 0; j < size; j++) {
      gameBoard[i][j] = '';
    }
  }
  return gameBoard;
};

const initialState = {
  size: 3,
  gameBoard: initializeGame(),
  turn: 'X',
  winner: null
};

const winnerCheck = (state) => {
  let winner;
  let i = 0;
  while (!winner && i < state.size) {
    let j = 0;
    let countRowX = 0;
    let countRowO = 0;
    let countColumnX = 0;
    let countColumnO = 0;
    while (j < state.size) {
      countRowX = state.gameBoard[i][j] == 'X' ? countRowX + 1 : countRowX;
      countRowO = state.gameBoard[i][j] == 'O' ? countRowO + 1 : countRowO;
      countColumnX = state.gameBoard[j][i] == 'X' ? countColumnX + 1 : countColumnX;
      countColumnO = state.gameBoard[j][i] == 'O' ? countColumnO + 1 : countColumnO;
      j++
    }
    if (countRowX == state.size || countColumnX == state.size) {
      winner = 'X';
    }
    if (countRowO == state.size || countColumnO == state.size) {
      winner = 'O';
    }
    i++;
  }
  if(winner){
    return winner;
  }
  let countR2LX = 0;
  let countR2LO = 0;
  let countL2RX = 0;
  let countL2RO = 0;
  for (i = 0; i < state.size; i++) {
    countR2LX = state.gameBoard[i][i] == 'X' ? countR2LX + 1 : countR2LX;
    countR2LO = state.gameBoard[i][i] == 'O' ? countR2LO + 1 : countR2LO;
    countL2RX = state.gameBoard[i][state.size - i - 1] == 'X' ? countL2RX + 1 : countL2RX;
    countL2RO = state.gameBoard[i][state.size - i - 1] == 'O' ? countL2RO + 1 : countL2RO;
  }
  if (countR2LX == state.size || countL2RX == state.size) {
    winner = 'X';
  }
  if (countR2LO == state.size || countL2RO == state.size) {
    winner = 'O';
  }
  return winner;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD_SIZE:
      console.log('SET_BOARD_SIZE');
      return { ...state, size: action.payload };
    case SET_SQUARE:
      console.log('SET_SQUARE');
      if (!state.gameBoard[action.payload.i][action.payload.j]) {
        state.gameBoard[action.payload.i][action.payload.j] = state.turn === 'X' ? 'X' : 'O';
        const winner = winnerCheck(state);
        if (winner) {
          return { ...state, winner };
        }
        state.turn = state.turn === 'X' ? 'O' : 'X';
      }
      return { ...state, turn: state.turn };
    default:
      return state;
  }
};
