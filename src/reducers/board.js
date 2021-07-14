import { SET_BOARD_SIZE, SET_SQUARE } from '@actions/types';

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
  turn: 'PLAYER_1'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD_SIZE:
      console.log('SET_BOARD_SIZE');
      return { ...state, size: action.payload };
    case SET_SQUARE:
      console.log('SET_SQUARE');
      if (!state.gameBoard[action.payload.i][action.payload.j]) {
        state.gameBoard[action.payload.i][action.payload.j] = state.turn === 'PLAYER_1' ? 'X' : 'O';
        state.turn = state.turn === 'PLAYER_1' ? 'PLAYER_2' : 'PLAYER_1';
      }
      return { ...state, turn: state.turn };
    default:
      return state;
  }
};
