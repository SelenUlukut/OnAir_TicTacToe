import {SET_BOARD_SIZE} from '@actions/types';

const initialState = {
  size: 3,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD_SIZE:
      return {...state, size: action.payload};
    default:
      return state;
  }
};
