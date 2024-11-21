import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:2000',
})

export const phpAxiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})


phpAxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})