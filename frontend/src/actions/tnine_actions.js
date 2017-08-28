
import { onSuccess, onError } from './index';

export function combination(str){
    let fn = function(active, rest, a){
        if(!active && !rest)
            return;
        if(!rest){
            a.push(active)
        } else {
            fn(active + rest[0],rest.slice(1),a);
            fn(active, rest.slice(1),a);
        }
        return a;
    }
    let comb = fn("",str,[]);
    console.log("Actions | Combinations ", comb);
    return function(dispatch){
        dispatch(onSuccess("FETCH_WORDS", comb))
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