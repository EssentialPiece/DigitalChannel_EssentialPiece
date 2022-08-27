export interface ProductDocument {
    productType: 'standard' | 'monthly'
    _id: string
    title?: string
    shortDescription?: string
    longDescription?: string
    published: string
    cost: number
    purchaseLink: string
    feature: boolean
  }