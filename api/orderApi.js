import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export const addOrder = (payload) => {
  return axios
    .post(BASE_URL + '/orders', payload)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    })
}

export const editOrder = (id, payload) => {
  return axios
    .put(BASE_URL + `/orders/${id}`, payload)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    })
}

export const getOrders = () => {
  return axios
    .get(BASE_URL + '/orders')
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    })
}

export const getOrderByOrderId = (id) => {
  return axios
    .get(BASE_URL + `/orders/${id}`)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    })
}

export const removeorder = (id) => {
  return axios
    .delete(BASE_URL + `/orders/${id}`)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    })
}

export const addToCartApi = ({ item, amount }) => {
  console.log(item, amount)
}
