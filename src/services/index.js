import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})


export default api
