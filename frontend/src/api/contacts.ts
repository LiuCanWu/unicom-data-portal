import request from './request'

export interface ContactPayload {
  name: string
  phone: string
  company: string
  question: string
}

export function createContact(payload: ContactPayload) {
  return request.post('/api/contacts', payload)
}
