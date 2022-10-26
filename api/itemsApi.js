import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export const getItemsApi = () => {
  return [
      {id: '001', name: 'Hammar 1', stock: 10, unitPrice: 10000},
      {id: '002', name: 'Hammar 2', stock: 10, unitPrice: 10000},
      {id: '003', name: 'Hammar 3', stock: 10, unitPrice: 10000},
      {id: '004', name: 'Hammar 4', stock: 10, unitPrice: 10000},
      {id: '005', name: 'Hammar 5', stock: 10, unitPrice: 10000},
      {id: '006', name: 'Hammar 6', stock: 10, unitPrice: 10000},
      {id: '007', name: 'Hammar 7', stock: 10, unitPrice: 10000},
      {id: '008', name: 'Hammar 8', stock: 10, unitPrice: 10000}
  ]
}

export const getItems = () => {
  return axios
    .get(BASE_URL + '/items')
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
