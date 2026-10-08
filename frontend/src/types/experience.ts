export type ExperienceType =
  | 'demo'
  | 'video'
  | 'trial'


export type ExperienceStatus =
  | 'available'
  | 'preparing'


export interface ExperienceItem {
  id: string

  productId: string

  type: ExperienceType

  title: string

  description: string

  status: ExperienceStatus

  featured?: boolean

  previewImage?: string

  url?: string

  tags: string[]

  order: number
}