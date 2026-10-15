import { useState } from 'react'
import './Categories.scss'

const categories = [
  { name: 'Tecnologia', icon: 'tecnologia' },
  { name: 'Supermercado', icon: 'supermercado' },
  { name: 'Bebidas', icon: 'bebidas' },
  { name: 'Ferramentas', icon: 'ferramentas' },
  { name: 'Saúde', icon: 'saude' },
  { name: 'Esportes e Fitness', icon: 'esportes' },
  { name: 'Moda', icon: 'moda' },
]

function Categories() {
  const [active, setActive] = useState('Tecnologia')

  return (
    <section className="categories" aria-label="Categorias de produtos">
      <ul className="container categories__list">
        {categories.map(({ name, icon }) => (
          <li key={name}>
            <button
              className={`categories__item ${active === name ? 'categories__item--active' : ''}`}
              onClick={() => setActive(name)}
            >
              <span className="categories__icon">
                <img src={`/icons/categories/${icon}.svg`} alt="" />
              </span>
              <span className="categories__name">{name}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Categories