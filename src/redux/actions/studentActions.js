import axios from "../../utils/axios-base";
import * as types from './actionTypes'
import * as endpoints from '../../utils/endpoints';
import * as tokenConfig from '../../utils/tokenConfig.js';
import { returnErrors } from './messageActions';

const addStudentStart = () => ({
    type: types.ADD_STUDENT_START
})

const addStudentSuccess = (data) => ({
    type: types.ADD_STUDENT_SUCCESS,
    data
})
const addStudentFail = (data) => ({
    type: types.ADD_STUDENT_FAIL,
    data
})



export const addStudent = (formData) => (dispatch, getState) => {
    dispatch(addStudentStart())
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }
    const endPoint = endpoints.ADMIN_URL
    axios
        .post(`${endPoint}/admin/login`, formData, config)
        .then(res => {

            dispatch(addStudentSuccess(res.data))
        })
        .catch(err => {
            dispatch(addStudentFail())
            console.log(err)
            // dispatch(returnErrors(err.response.data, err.response.status))
        });
}

