import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from '../constants/userConstants'

const initialState = {
    loading: false,
    invalidCred: false,
    accessToken: null,
    refreshToken: null,
    role: null,
    email: null,
    userId: null,
    username: null,
    phone: null,
};

export const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true, 
            }
        case USER_LOGIN_SUCCESS:
            return {         
                ...state,
                loading: false,
                invalidCred: false,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                role: action.payload.role === 'back officer' ? 'admin' : 'user',
                email: action.payload.email, 
            }
        case USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                invalidCred: true,
            }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

//THIS IS FOR LOGGING OUT
export const userLogoutReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}