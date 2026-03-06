import http from '../utils/http'

export function getData() {
  return http.get('/api/data')
}
