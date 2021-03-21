import * as actionTypes from './actionTypes'


export const saveResult = displayResult =>{
    //const updatedResulted= displayResult*2 after getting data from API call we can modify and send it from here
    //Max suggests us to modify the data however in the reducer
    return{
        type:actionTypes.STORE_RESULT, 
        result:displayResult
    } 
}
//Due to Redux Thunk we return another function as middleware(where we can perform asunchronus tasks). This
//middleware runs after dispatch and stops it. It then dispatches another action after the Asynchronus task is done
export const storeResult =(displayResult) =>{
    return (dispatch, getState)=>{   //we get dispatch, getState here by Redux thunk
        setTimeout(()=>{
            // const oldCounter =getState.ctr.counter;
            // console.log(oldCounter); //thus is the state value It is recommended to to modify state in Reducer
            dispatch(saveResult(displayResult));//here we dispatch asyn task
        },2000)
    } 
       
}
export const deleteResult =(id) =>{
    return{
        type:actionTypes.DELETE_RESULT, 
        payload: {delElId: id}
    }    
}