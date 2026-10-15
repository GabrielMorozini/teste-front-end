import type { Product, ProductsApiResponse } from '../types/product'

const PRODUCTS_URL = '/data/products.json'

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL)

  if (!response.ok) {
    throw new Error('Não foi possível carregar os produtos.')
  }

  const data: ProductsApiResponse = await response.json()

  if (!data.success) {
    throw new Error('A API retornou um erro ao listar os produtos.')
  }

  return data.products.map((product, index) => ({
    ...product,
    id: index + 1,
  }))
}