export const userActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    SET_AUTHENTICATION: 'SET_AUTHENTICATION' 
}

export const setCurrentUser = (payload) => {
    return {
        type: userActionTypes.SET_CURRENT_USER,
        payload
    }
}

export const setAuthentication = (payload) => {
    return {
        type: userActionTypes.SET_AUTHENTICATION,
        payload
    }
}