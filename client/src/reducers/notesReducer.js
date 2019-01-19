import {NOTES} from "../actions/types";

export default  (state = {}, action) =>{
    switch (action.type) {
        case NOTES :
            return action.payload
        default :
            return state;
    }
}