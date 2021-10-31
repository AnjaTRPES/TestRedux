import {TEXTCHANGE, DIFFTEXT} from "../constants";

const INITIAL_STATE = {
    text: 'SomeText!'
}

const textReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
            case TEXTCHANGE:
                console.log('textchange called')
                return {...state,
                    text: action.payload}
            case DIFFTEXT:
                console.log('Diff text called!')
                return {...state,
                        text: action.payload}
            default:
                return state
    }
}




export default textReducer;