import axios, { AxiosInstance } from 'axios'

export const client: AxiosInstance = axios.create({
  baseURL: 'https://api.itbook.store/1.0',
  timeout: 5000
})
