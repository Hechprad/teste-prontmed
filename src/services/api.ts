import axios from 'axios'

export const baseUrlTodos = process.env.REACT_APP_BASE_URL_TODOS || ''

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}` ?? '',
})

export default api
