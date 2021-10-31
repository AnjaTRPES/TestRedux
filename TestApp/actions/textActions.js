import {TEXTCHANGE, DIFFTEXT} from "../constants";

const changeText = () =>{
    return{
        type: TEXTCHANGE,
        payload: 'sampleText'
    };
};

const setTextDifferent = (NewText) =>{
    return{
        type: DIFFTEXT,
        payload: NewText
    };
};

export const loadTextThunk = 
    () => 
    (dispatch) => {
        dispatch(setTextDifferent('mergh?'))
    }




export default {
    changeText,
    setTextDifferent
}