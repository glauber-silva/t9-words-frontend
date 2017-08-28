const INITIAL_STATE = {
    words : [],
    typedNums : "",
    typedLetters: "",
}

export function wordsReducer(state = INITIAL_STATE, action ){
    switch(action.type){
        case 'FETCH_NUMS':
            return{...state,
                typedNums: state.typedNums + action.payload
            }

        case 'FETCH_NUMS':
            return{...state,
                typedLetters: state.typedNums + action.payload
            }
        
        case 'FETCH_WORDS':
            return{...state,
                words: action.payload
            }
        case 'RESET_STATE':
            return{...state,
                words: [],
                typedNums: "",
                typedLetters: ""
            }
        default:
            return state
    }
}