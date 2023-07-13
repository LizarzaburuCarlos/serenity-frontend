import "./Footer.css"
import logoFooter from "/img/LogoBlanco.png"

export default function Footer() {

    return (
        
        <footer>
            <div className="footer-content">
                <div className="logo-footer">
                    <img src={logoFooter} alt="logo"/>
                </div>
                <div style={{display: "flex"}}>
                    <p>Política de Privacidad</p>
                    <p>Términos y Condiciones</p>
                    <p>Política de Cookies</p>
                    <p>Contacto</p>
                </div>
            </div>
        </footer>
    )

}