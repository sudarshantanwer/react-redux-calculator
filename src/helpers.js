/**
 * Created by sudarshan on 14/12/17.
 */

export function operationClicked(state, action) {
debugger
}

export function digitClicked(state, action) {
debugger

    if(!state.operation){
        state.digit1 = state.digit1 + action.digit;
    } else {
        state.digit2 = state.digit2 + action.digit;
    }
}

export function resultClicked(state, action) {

}