import { useEffect, useRef, useState } from 'react'
import { Minus, Plus, X } from 'lucide-react'
import type { Product } from '../../types/product'
import './ProductModal.scss'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="product-modal__overlay" onClick={onClose}>
      <div
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-label={product.productName}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="product-modal__close"
          onClick={onClose}
          aria-label="Fechar"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <img
          src={product.photo}
          alt={product.productName}
          className="product-modal__image"
        />

        <div className="product-modal__info">
          <h2 className="product-modal__title">{product.productName}</h2>
          <strong className="product-modal__price">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>
          <p className="product-modal__description">{product.descriptionShort}</p>
          <a href="#" className="product-modal__link">
            Veja mais detalhes do produto &gt;
          </a>

          <div className="product-modal__actions">
            <div className="product-modal__quantity">
              <button
                type="button"
                aria-label="Diminuir quantidade"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus size={14} aria-hidden="true" />
              </button>
              <span>{String(quantity).padStart(2, '0')}</span>
              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus size={14} aria-hidden="true" />
              </button>
            </div>
            <button type="button" className="product-modal__buy">
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal