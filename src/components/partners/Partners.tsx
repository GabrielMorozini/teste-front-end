import './Partners.scss'

const partners = [
  {
    id: 1,
    title: 'Parceiros',
    text: 'Lorem ipsum dolor sit amet, consectetur',
    cta: 'Confira',
    href: '#',
  },
  {
    id: 2,
    title: 'Parceiros',
    text: 'Lorem ipsum dolor sit amet, consectetur',
    cta: 'Confira',
    href: '#',
  },
]

function Partners() {
  return (
    <section className="partners container" aria-labelledby="partners-title">
      <h2 id="partners-title" className="partners__sr-only">
        Nossos parceiros
      </h2>

      <ul className="partners__list">
        {partners.map(({ id, title, text, cta, href }) => (
          <li key={id}>
            <article className="partners__card">
              <h3 className="partners__title">{title}</h3>
              <p className="partners__text">{text}</p>
              <a href={href} className="partners__button">
                {cta}
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Partners