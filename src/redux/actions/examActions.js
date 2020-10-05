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



export const getAllExams = () => (dispatch) => {
    dispatch(getExamStart())
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }
    const endPoint = endpoints.EXAMS_URL
    axios
        .get(`${endPoint}`, config)
        .then(res => {

            dispatch(getExamSuccess(res.data))
        })
        .catch(err => {
            dispatch(getExamFail())
            console.log(err)
            // dispatch(returnErrors(err.response.data, err.response.status))
        });
}


const getSingleExamStart = () => ({
    type: types.GET_SINGLE_EXAM_START
})

const getSingleExamSuccess = (data) => ({
    type: types.GET_SINGLE_EXAM_SUCCESS,
    data
})
const getSingleExamFail = () => ({
    type: types.GET_SINGLE_EXAM_FAIL,
})



export const getSingleExam = (examId) => (dispatch) => {
    dispatch(getSingleExamStart())
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }
    const endPoint = endpoints.EXAMS_URL
    axios
        .get(`${endPoint}/${examId}/questions`, config)
        .then(res => {

            dispatch(getSingleExamSuccess(res.data))
        })
        .catch(err => {
            dispatch(getSingleExamFail())
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
        .post(`${endPoint}/${examId}/students`, config)
        .then(res => {
            dispatch(getStudentSuccess(res.data))
        })
        .catch(err => {
            dispatch(getStudentFail())
            console.log(err)
            // dispatch(returnErrors(err.response.data, err.response.status))
        });
}


const uploadQuestonStart = () => ({
    type: types.UPLOAD_QUESTION_START
})

const uploadQuestonSuccess = (data) => ({
    type: types.UPLOAD_QUESTION_SUCCESS,
    data
})
const uploadQuestonFail = (data) => ({
    type: types.UPLOAD_QUESTION_FAIL
})



export const uploadQueston = (questions, examId) => (dispatch) => {
    dispatch(uploadQuestonStart())
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }
    const endPoint = endpoints.EXAMS_URL
    axios
        .post(`${endPoint}/${examId}/questions`, questions, config)
        .then(res => {
            dispatch(uploadQuestonSuccess(res.data))
        })
        .catch(err => {
            dispatch(uploadQuestonFail())
            console.log(err)
            // dispatch(returnErrors(err.response.data, err.response.status))
        });
}