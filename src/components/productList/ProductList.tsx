import { useEffect, useId, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '../productCard/ProductCard'
import ProductModal from '../productModal/ProductModal'
import { getProducts } from '../../services/api'
import type { Product } from '../../types/product'
import './ProductList.scss'

interface ProductListProps {
  title: string
  tabs?: string[]
  viewAllHref?: string
  flat?: boolean
}

function ProductList({ title, tabs, viewAllHref, flat = false }: ProductListProps) {
  const titleId = useId()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    let active = true

    getProducts()
      .then((data) => {
        if (active) setProducts(data)
      })
      .catch((err: Error) => {
        if (active) setError(err.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <section
      className={`product-list container${flat ? ' product-list--flat' : ''}`}
      aria-labelledby={titleId}
    >
      <h2 id={titleId} className="product-list__title">
        {title}
      </h2>

      {tabs && (
        <nav className="product-list__tabs" aria-label="Categorias de produtos">
          <ul>
            {tabs.map((tab, index) => (
              <li key={tab}>
                <button
                  type="button"
                  className="product-list__tab"
                  aria-current={index === 0 ? 'true' : undefined}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {viewAllHref && (
        <a href={viewAllHref} className="product-list__view-all">
          Ver todos
        </a>
      )}

      {loading && <p role="status">Carregando produtos...</p>}
      {error && <p role="alert">{error}</p>}

      {!loading && !error && (
        <div className="product-list__carousel">
          <button
            type="button"
            className="product-list__arrow product-list__arrow--prev"
            aria-label="Produtos anteriores"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <ul className="product-list__items">
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} onSelect={setSelectedProduct} />
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="product-list__arrow product-list__arrow--next"
            aria-label="Próximos produtos"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </section>
  )
}

export default ProductList