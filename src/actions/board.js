import {SET_BOARD_SIZE} from './types';
import {SET_SQUARE} from './types';

export const setBoardSize = (data) => ({
  type: SET_BOARD_SIZE,
  payload: data,
});

export const setSquare = (data) => ({
  type: SET_SQUARE,
  payload: data,
});