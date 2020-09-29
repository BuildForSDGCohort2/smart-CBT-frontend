import * as types from '../actions/actionTypes';
// import * as tokenConfig from './../../utils/tokenConfig'


const initialState = {
    students: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case types.GET_ALL_STUDENTS_START:
            return {
                ...state,
                isLoading: true,
            };
        case types.GET_ALL_STUDENTS_SUCCESS:
            return {
                ...state,
                students: action.data,
                isLoading: false,
            }

        case types.GET_ALL_STUDENTS_FAIL:
            return {
                ...state,
                isLoading: false,
            }


        default:
            return state;
    }
}