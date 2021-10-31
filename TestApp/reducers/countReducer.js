import { COUNTER_CHANGE, INCREMENT } from "../constants";


const countReducer = (state = 1, action) =>{
    switch(action.type) {
            case COUNTER_CHANGE:
                return state-1
            case INCREMENT:
                return state+1
            default:
                return state
    }
}




export default countReducer;