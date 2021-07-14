import {SET_BOARD_SIZE} from './types';

export const setBoardSize = (data) => ({
  type: SET_BOARD_SIZE,
  payload: data,
});

