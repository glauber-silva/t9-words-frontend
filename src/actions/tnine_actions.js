
import { onSuccess, onError } from './index';
import axios from 'axios';

export function combination(str){

    return function(dispatch){
        axios.get("http://localhost:8080/words/"+str)
        .then((response) => {
            console.log("Response", response);
            dispatch(onSuccess("FETCH_WORDS", response.data))
        })
        .catch((err) => {
          dispatch(onError('FETCH_WORDS_ERR', err.response.data.error))
      })
    }
}

export function inputNum(num) {
    console.log('action | num -> ', num)
    return {
        type: "FETCH_NUMS",
        payload: num
    }
}

export function inputLetters(str){
    return function(dispatch){
        dispatch(onSuccess("FETCH_LETTERS", str));
        dispatch(combination(str));
    }
}

export function clearState(){
    return{
        type: "RESET_STATE",
        payload:''
    }
}