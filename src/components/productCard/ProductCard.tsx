import type { Product } from '../../types/product'
import './ProductCard.scss'

interface ProductCardProps {
  product: Product
}

const INSTALLMENTS = 2

const formatPrice = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

function ProductCard({ product }: ProductCardProps) {
  const { productName, descriptionShort, photo, price } = product

  const installmentValue = price / INSTALLMENTS

  return (
    <article className="product-card">
      <img
        className="product-card__image"
        src={photo}
        alt={productName}
        width={240}
        height={240}
        loading="lazy"
      />

      <h3 className="product-card__name">{descriptionShort}</h3>

      <div className="product-card__prices">
        <strong className="product-card__price">{formatPrice(price)}</strong>

        <span className="product-card__installments">
          ou {INSTALLMENTS}x de {formatPrice(installmentValue)} sem juros
        </span>

        <span className="product-card__shipping">Frete grátis</span>
      </div>

      <button type="button" className="product-card__button">
        Comprar
      </button>
    </article>
  )
}

export default ProductCard