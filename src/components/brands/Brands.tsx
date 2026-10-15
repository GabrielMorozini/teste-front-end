import { useId } from 'react'
import './Brands.scss'

interface Brand {
  id: number
  name: string
  logo: string
  href?: string
}

interface BrandsProps {
  title?: string
  brands: Brand[]
}

function Brands({ title = 'Navegue por marcas', brands }: BrandsProps) {
  const titleId = useId()

  return (
    <section className="brands container" aria-labelledby={titleId}>
      <h2 id={titleId} className="brands__title">
        {title}
      </h2>

      <ul className="brands__list">
        {brands.map(({ id, name, logo, href = '#' }) => (
          <li key={id} className="brands__item">
            <a href={href} className="brands__link">
              <img
                className="brands__logo"
                src={logo}
                alt={name}
                width={110}
                height={40}
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Brands