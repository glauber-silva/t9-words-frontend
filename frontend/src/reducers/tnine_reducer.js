const INITIAL_STATE = {
    words : [],
    typed : ""
}

export function wordsReducer(state = INITIAL_STATE, action ){
    switch(action.type){
        case 'FETCH_NUMS':
            return{...state,
                typed: state.typed + action.payload
            }
        default:
            return state
    }
}