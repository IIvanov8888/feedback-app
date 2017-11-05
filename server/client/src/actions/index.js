import axios from 'axios';
import { FETCH_USER } from './types';

/**
 * @author Ivelin Ivanov
 * @description fetch current user if loggedin 
 * @param {}
 */

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

/**
 * @author Ivelin Ivanov
 * @description hit API to check user and get credits if any
 * @param {string} token
 */
export const handleToken = (token) => async dispatch => {
   const res = await axios.post('/api/stripe' ,token);

   dispatch({type: FETCH_USER, payload: res.data});
};