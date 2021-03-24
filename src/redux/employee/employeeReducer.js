import  {
    FETCH_EMPLOYEE_REQUEST,
    FETCH_EMPLOYEE_SUCCESS,
    FETCH_EMPLOYEE_FAILURE
} from './userTypes.js'

const initialState = {
    loading: false,
    employee: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_EMPLOYEE_SUCCESS:
            return {
                loading: false,
                employee: action.payload,
                error: ''
            }
        case FETCH_EMPLOYEE_FAILURE:
            return {
                loading: false,
                employee: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer