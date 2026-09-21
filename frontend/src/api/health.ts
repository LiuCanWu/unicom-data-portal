import request from './request'

export interface HealthResponse {
  status: string
  service: string
}

export function getHealth() {
  return request.get<HealthResponse>('/api/health')
}