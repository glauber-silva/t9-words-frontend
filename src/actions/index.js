export function onSuccess(reducer, payload) { // needs to dispatch, so it is first argument
    return{
            type: reducer,
            payload
        }
}
export function onError(reducer, error) { // needs to dispatch, so it is first argument
    return{
            type: reducer,
            error
        }
}