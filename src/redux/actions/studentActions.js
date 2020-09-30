import axios from "../../utils/axios-base";
import * as types from './actionTypes'
import * as endpoints from '../../utils/endpoints';
// import * as tokenConfig from '../../utils/tokenConfig.js';
// import { returnErrors } from './messageActions';

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



export const addStudent = (formData, examId) => (dispatch) => {
    dispatch(addStudentStart())
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const endPoint = endpoints.EXAMS_URL
    axios
        .post(`${endPoint}/${examId}/students`, formData, config)
        .then(res => {

            dispatch(addStudentSuccess(res.data))
        })
        .catch(err => {
            dispatch(addStudentFail())
            console.log(err)
            // dispatch(returnErrors(err.response.data, err.response.status))
        });
}

const getStudentStart = () => ({
    type: types.GET_ALL_STUDENTS_START
})

const getStudentSuccess = (data) => ({
    type: types.GET_ALL_STUDENTS_SUCCESS,
    data
})
const getStudentFail = (data) => ({
    type: types.GET_ALL_STUDENTS_FAIL
})



export const getStudent = (examId) => (dispatch, getState) => {
    dispatch(getStudentStart())
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }
    const endPoint = endpoints.EXAMS_URL
    axios
        .get(`${endPoint}/${examId}/students/`, config)
        .then(res => {
            dispatch(getStudentSuccess(res.data))
        })
        .catch(err => {
            dispatch(getStudentFail())
            console.log(err)
            // dispatch(returnErrors(err.response.data, err.response.status))
        });
}
const verifyStudentStart = () => ({
    type: types.VERIFY_STUDENT_START
})

const verifyStudentSuccess = (data) => ({
    type: types.VERIFY_STUDENT_SUCCESS,
    data
})
const verifyStudentFail = (data) => ({
    type: types.VERIFY_STUDENT_FAIL
})



export const verifyStudent = (examId, regNo) => (dispatch) => {
    dispatch(verifyStudentStart())
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }
    const endPoint = endpoints.EXAMS_URL
    axios
        .get(`${endPoint}/${examId}/students/${regNo}`, config)
        .then(res => {
            dispatch(verifyStudentSuccess(res.data))
        })
        .catch(err => {
            dispatch(verifyStudentFail())
            console.log(err)
            // dispatch(returnErrors(err.response.data, err.response.status))
        });
}