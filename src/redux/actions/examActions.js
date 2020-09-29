import axios from "../../utils/axios-base";
import * as types from './actionTypes'
import * as endpoints from '../../utils/endpoints';
import * as tokenConfig from '../../utils/tokenConfig.js';
import { returnErrors } from './messageActions';

const getExamStart = () => ({
    type: types.GET_EXAM_START
})

const getExamSuccess = (data) => ({
    type: types.GET_EXAM_SUCCESS,
    data
})
const getExamFail = () => ({
    type: types.GET_EXAM_FAIL,
})



export const getAllExams = () => (dispatch, getState) => {
    dispatch(getExamStart())
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }
    const endPoint = endpoints.EXAMS_URL
    axios
        .post(`${endPoint}`, config)
        .then(res => {

            dispatch(getExamSuccess(res.data))
        })
        .catch(err => {
            dispatch(getExamFail())
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
        .post(`${endPoint}/${examId}/students/`, config)
        .then(res => {
            dispatch(getStudentSuccess(res.data))
        })
        .catch(err => {
            dispatch(getStudentFail())
            console.log(err)
            // dispatch(returnErrors(err.response.data, err.response.status))
        });
}