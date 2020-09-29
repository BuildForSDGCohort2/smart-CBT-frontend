import * as types from '../actions/actionTypes';
// import * as tokenConfig from './../../utils/tokenConfig'


const initialState = {
    all_exams: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case types.GET_EXAM_START:
            return {
                ...state,
                isLoading: true,
            };
        case types.GET_EXAM_SUCCESS:
            return {
                ...state,
                all_exams: action.data,
                isLoading: false,
            }

        case types.GET_EXAM_FAIL:
            return {
                ...state,
                isLoading: false,
            }


        default:
            return state;
    }
}