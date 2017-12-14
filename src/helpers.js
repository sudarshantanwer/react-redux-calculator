/**
 * Created by sudarshan on 14/12/17.
 */

export function operationClicked(state, action) {
debugger
    if(action.operation === '='){
        state.result = eval(state.digit1 + state.operation + state.digit2);
        state.displayNumber = 'result';

    } else {
        state.operation = action.operation;
    }

    return Object.assign({}, state);
}

export function digitClicked(state, action) {

    if(!state.operation){
        state.digit1 = state.digit1 + action.digit;
        state.displayNumber = 'digit1';
    } else {
        state.digit2 = state.digit2 + action.digit;
        state.displayNumber = 'digit2';
    }

    return Object.assign({}, state);
}

export function resultClicked(state, action) {
    return Object.assign({}, state);
}