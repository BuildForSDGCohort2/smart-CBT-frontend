import axios from "../../utils/axios-base";
import * as types from './actionTypes'
import * as endpoints from '../../utils/endpoints';
import * as tokenConfig from '../../utils/tokenConfig.js';
import { returnErrors } from './messageActions';

const clickedRoute = (data) => ({
    type: types.CLICKED_ROUTE,
    data
})




export const addStudent = (route) => (dispatch) => {
    dispatch(clickedRoute(route))
}

