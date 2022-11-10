import axios from "axios"; 

const apiInstance = axios.create({
  baseURL: 'https://csse-be.herokuapp.com/api',
});

export default apiInstance;