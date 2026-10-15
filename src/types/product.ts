export interface ProductResponse {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

export interface ProductsApiResponse {
  success: boolean
  products: ProductResponse[]
}

export interface Product extends ProductResponse {
  id: number
}