import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 10000,
})

request.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API request failed:', error)
    return Promise.reject(error)
  },
)

export default request