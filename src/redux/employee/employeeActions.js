import axios from 'axios'

import  {
    FETCH_EMPLOYEE_REQUEST,
    FETCH_EMPLOYEE_SUCCESS,
    FETCH_EMPLOYEE_FAILURE
} from './employeeTypes.js'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_EMPLOYEE_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_EMPLOYEE_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_EMPLOYEE_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        //Above will set loading to true
        axios.get('https://jsonplaceholder.typicode.com/users')
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