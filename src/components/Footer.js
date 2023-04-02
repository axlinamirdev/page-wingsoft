export default function Footer() {
    return (
        <footer>
            <div className="footer_nav">
                <div className="footer_nav_social">
                    <img src="/wingsoft-logo.png" alt="" />
                    <div className="footer_nav_social_items">
                        <img src="/images/social/facebook.svg" alt="" />
                        <img src="/images/social/twitter.svg" alt="" />
                        <img src="/images/social/linkedli.svg" alt="" />
                        <img src="/images/social/instagram.svg" alt="" />
                    </div>
                </div>
                <div className="footer_nav_servicios">
                    <h5>Servicios</h5>
                    <ul>
                        <li>Cloud computing</li>
                        <li>Data Analytics</li>
                        <li>Desarrollo Web y apps</li>
                    </ul>
                </div>
                <div className="footer_nav_pages">
                    <h5>Pages</h5>
                    <ul>
                        <li>Casos de Exito</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer_nav_companies">
                    <h5>Company</h5>
                    <ul>
                        <li>Politicas de Privacidad</li>
                        <li>Términos y condiciones</li>
                    </ul>
                </div>
                <div className="footer_nav_us">
                    <h5>Sobre Nosotros</h5>
                    <p>Déjanos tu correo y nos pondremos en contacto contigo.</p>
                    <form>
                        <input type="text" placeholder="Déjanos tu email" />
                        <button>
                            <span>Contáctanos</span>
                        </button>
                    </form>
                </div>
            </div>
            <div className="footer_copyright">
                © Wingsoft es una marca registrada. Todos los derechos reservados 2008-2021.
            </div>
        </footer>
    )
}