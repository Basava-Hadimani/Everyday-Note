import {FETCH_USER} from "../actions/types";

export default (state = null, action) =>{
    switch (action.type){
        case FETCH_USER :
            return action.payload || null;
            break;
        default:
            return state;
    }
}