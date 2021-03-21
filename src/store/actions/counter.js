import * as actionTypes from './actionTypes'

export const increment =() =>{
    return{
        type: actionTypes.INCREMENT
    }    
}
export const decrement =() =>{
    return{
        type: actionTypes.DECREMENT
    }    
}
export const addition =() =>{
    return{
        type: actionTypes.ADDITION,
        payload:{value: 10}
    }    
}
export const subtraction =() =>{
    return{
        type: actionTypes.SUBTRACTION,
        payload:{value: 10}
    }    
}

