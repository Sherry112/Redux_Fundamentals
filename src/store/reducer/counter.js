import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utlility'


const initialState = {
  counter: 0,
};

const counter_reducer = (state = initialState, action) => {
    if (action.type === actionTypes.INCREMENT) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === actionTypes.DECREMENT) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === actionTypes.ADDITION) {
    return {
      ...state,
      counter: state.counter  + action.payload.value,
    };
  }
  if (action.type === actionTypes.SUBTRACTION) {
    return updateObject(state, {counter: state.counter - action.payload.value}) //A utility function
  }
  return state;
};
export default counter_reducer;
