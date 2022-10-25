import axios from 'axios'

export const getItems = () => {
  return axios
    .get('https://csse-be.herokuapp.com/api/items')
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error
    })
}

export const addOrder = (payload) => {
  return axios
    .post('https://csse-be.herokuapp.com/api/orders/addToCart', payload)
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
