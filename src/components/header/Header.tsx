import {
  ShieldCheck,
  Truck,
  CreditCard,
  Search,
} from 'lucide-react'
import './Header.scss'

const menuItems = [
  'Todas categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
  'Ofertas do dia',
]

const actions = [
  { label: 'Pedidos', icon: '/icons/actions/pedidos.svg' },
  { label: 'Favoritos', icon: '/icons/actions/favoritos.svg' },
  { label: 'Minha conta', icon: '/icons/actions/conta.svg' },
  { label: 'Carrinho', icon: '/icons/actions/carrinho.svg' },
]

function Header() {
  return (
    <header className="header">
      <section className="header__benefits" aria-label="Benefícios da loja">
        <ul className="container header__benefits-list">
          <li>
            <ShieldCheck size={18} aria-hidden="true" />
            <span>
              Compra <strong>100% segura</strong>
            </span>
          </li>
          <li>
            <Truck size={18} aria-hidden="true" />
            <span>
              <strong>Frete grátis</strong> acima de R$ 200
            </span>
          </li>
          <li>
            <CreditCard size={18} aria-hidden="true" />
            <span>
              <strong>Parcele</strong> suas compras
            </span>
          </li>
        </ul>
      </section>

      <div className="container header__main">
        <a href="/" className="header__logo">
          <img src="/logo.svg" alt="Econverse" />
        </a>

        <form
          className="header__search"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />
          <button type="submit" aria-label="Buscar">
            <Search size={22} aria-hidden="true" />
          </button>
        </form>

        <ul className="header__actions">
          {actions.map(({ label, icon }) => (
            <li key={label}>
              <button aria-label={label}>
                <img src={icon} alt="" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <nav className="container header__nav" aria-label="Categorias">
        <ul>
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className={
                  item === 'Ofertas do dia'
                    ? 'header__nav-link header__nav-link--highlight'
                    : 'header__nav-link'
                }
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="header__nav-link">
              <img src="/icons/actions/crown.svg" alt="" /> Assinatura
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header