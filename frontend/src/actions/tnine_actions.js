

export function inputNum(num) {
    console.log('action | num -> ', num)
    return {
        type: "FETCH_NUMS",
        payload: num
    }
}