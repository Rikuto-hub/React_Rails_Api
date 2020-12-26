import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_DEV_API_URL,
  withCredentials: true,
  // headers: {'X-Requested-With': 'XMLHttpRequest'}
})