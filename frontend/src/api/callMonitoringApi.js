import axios from 'axios'

/**
 * Instance Axios dengan konfigurasi dasar.
 * BaseURL '/api/v1' otomatis diteruskan oleh Vite proxy ke 'http://localhost:8080/api/v1'.
 */
const apiClient = axios.create({
  baseURL: '/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

/**
 * Memanggil REST API backend: GET /api/v1/call-monitoring
 * Mendukung parameter filter: page, limit, search, start_date, end_date, sentiment, sort_by, sort_order
 */
export async function getCallMonitorings(params = {}) {
  const response = await apiClient.get('/call-monitoring', { params })
  return response.data
}
