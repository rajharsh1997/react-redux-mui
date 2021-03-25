import axios from 'axios'

import  {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './userTypes.js'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = (iniApi=1) => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        //Above will set loading to true
        axios.get(iniApi)
        .then(response =>{
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}