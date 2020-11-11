import { userActionTypes } from "../actions/user_actions";

const initialState = {
    currentUser: null,
    isAuthenticated: false
}


const user_reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }    
        
        case userActionTypes.SET_AUTHENTICATION:
            return {
                ...state,
                isAuthenticated: payload
            }   
    
        default:
            return state;
    }
}

export default user_reducer