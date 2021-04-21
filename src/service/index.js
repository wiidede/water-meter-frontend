import axios from 'axios'
import { getBaseUrl } from '../utils'

const api = axios.create({
  baseURL: getBaseUrl(),
  timeout: 30000
})

export default api
