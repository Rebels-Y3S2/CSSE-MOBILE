import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export const loginUser = (authObj) => axios.post(BASE_URL + '/users/login', authObj);