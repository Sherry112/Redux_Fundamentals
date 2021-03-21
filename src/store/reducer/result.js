import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utlility';
const initialState = {
  results: []
};


const deleteResult = (state, action)=>{
    const updatedArray =state.results.filter(delElem=> delElem.id !== action.payload.delElId);
    return updatedArray;  
}
const result_reducer = (state = initialState, action) => {
  if(action.type===actionTypes.STORE_RESULT){
      return{
          ...state,
          results: state.results.concat({id: new Date(), value: action.result})
      }
  }
  if(action.type===actionTypes.DELETE_RESULT){
      //filter method is used to mutate Arrays in JS. Alternatively we could make a deep copy of the array
      // updatedArray=[...results] and call the splice JS method on it as it resturns a new array 
      //https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8303068#announcements Article for array update

    // const updatedArray= state.results.filter(delElem=> delElem.id !== action.payload.delElId)   
    
    const updatedArray =deleteResult(state, action)
    return updateObject(state, {results: updatedArray})
    // return{
    //     ...state,
    //     results: updatedArray
    // }
}
  return state;
};
export default result_reducer;
