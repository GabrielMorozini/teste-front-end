import './Hero.scss'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero__title">
        Venha conhecer nossas promoções
      </h1>
      <p className="hero__subtitle">
        <strong>50% Off</strong> nos produtos
      </p>
      <a href="#produtos" className="hero__button">
        Ver produto
      </a>
    </section>
  )
}

export default Hero