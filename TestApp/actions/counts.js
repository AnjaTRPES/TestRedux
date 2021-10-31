import { COUNTER_CHANGE, INCREMENT } from "../constants";

const changeCount = () =>{
    return{
        type: COUNTER_CHANGE,
    };
};

const increment = () => {
    return {
        type: INCREMENT
    }
};

export default {
    increment, 
    changeCount
}
