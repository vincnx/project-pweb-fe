import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:2000',
})

export const phpAxiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
})