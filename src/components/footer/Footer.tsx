import './Footer.scss'

const columns = [
    {
        title: 'Institucional',
        links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
    },
    {
        title: 'Ajuda',
        links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
    },
    {
        title: 'Termos',
        links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
    },
]

const socials = [
    { label: 'Instagram', icon: '/icons/social_media/instagram.svg' },
    { label: 'Facebook', icon: '/icons/social_media/facebook.svg' },
    { label: 'LinkedIn', icon: '/icons/social_media/linkedin.svg' },
]

function Footer() {
    return (
        <footer className="footer">
            <section className="footer__newsletter" aria-labelledby="newsletter-title">
                <div className="container footer__newsletter-inner">
                    <div className="footer__newsletter-text">
                        <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
                        <p>
                            Assine a nossa newsletter e receba as novidades e conteúdos
                            exclusivos da Econverse.
                        </p>
                    </div>

                    <form
                        className="footer__form"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            aria-label="Nome"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            aria-label="E-mail"
                            required
                        />
                        <button type="submit">Inscrever</button>

                        <label className="footer__terms">
                            <input type="checkbox" required />
                            Aceito os termos e condições
                        </label>
                    </form>
                </div>
            </section>

            <div className="footer__main">
                <div className="container footer__main-inner">
                    <div className="footer__brand">
                        <img src="/logo.svg" alt="Econverse" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <ul className="footer__socials">
                            {socials.map(({ label, icon }) => (
                                <li key={label}>
                                    <a href="#" aria-label={label}>
                                        <img src={icon} alt="" aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <nav className="footer__links" aria-label="Links do rodapé">
                        {columns.map(({ title, links }) => (
                            <div key={title} className="footer__column">
                                <h3>{title}</h3>
                                <ul>
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a href="#">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="footer__copy">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </footer>
    )
}

export default Footer