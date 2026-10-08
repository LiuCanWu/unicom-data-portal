export type ProductCategory =
  | 'infrastructure'
  | 'data-engineering'
  | 'semantic'
  | 'analytics'
  | 'circulation'


export interface ProductFeature {
  title: string
  description: string
}


export interface ProductScenario {
  title: string
  description?: string
}


export interface ProductAdvantage {
  title: string
  description: string
}


export interface ProductValue {
  title: string
  description: string
}


export interface ProductMetric {
  value: string
  label: string
  description?: string
}


export interface ProductCase {
  title: string
  description: string
  result?: string
}


export interface ProductLink {
  label: string
  url: string
  enabled: boolean
}


export interface Product {
  id: string

  slug: string

  name: string

  shortName?: string

  category: ProductCategory

  tagline: string

  description: string

  values?: ProductValue[]

  features: ProductFeature[]

  scenarios: ProductScenario[]

  advantages?: ProductAdvantage[]

  metrics?: ProductMetric[]

  cases?: ProductCase[]

  tags: string[]

  coverImage?: string

  architectureImage?: string

  architectureDescription?: string

  demoVideo?: string

  demoLink?: ProductLink

  trialLink?: ProductLink

  featured: boolean

  order: number

  status: 'available' | 'coming-soon'
}