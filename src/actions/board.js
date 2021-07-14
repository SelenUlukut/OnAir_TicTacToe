import {SET_BOARD_SIZE, SET_SQUARE, REFRESH_BOARD} from './types';

export const setBoardSize = (data) => ({
  type: SET_BOARD_SIZE,
  payload: data,
});

export const setSquare = (data) => ({
  type: SET_SQUARE,
  payload: data,
});

export const refreshBoard = (data) => ({
  type: REFRESH_BOARD
});