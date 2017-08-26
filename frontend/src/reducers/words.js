const INITIAL_STATE = {
    words = [],
    typed = '',
}

export function wordsReducer(state = INITIAL_STATE, action ){
    switch(action.type){
        case 'FETH_WORDS':
            return{...state,
                words: state.words.concat([action.payload])
            }
        default:
            return state
    }
}