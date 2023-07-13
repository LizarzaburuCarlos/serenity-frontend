import { Button } from "../components/Button"
import heroImg from "/img/fondo-hero.jpg"
import "./Hero.css"
import { Link } from "react-router-dom";

// const handleClick1 = () => {
//     redirectTo("/especialistas");
//   };

// const handleClick2 = () => {
//     redirectTo("/info-ayuda");
//   };

export default function Hero () { 

    return (
        
       <div className="hero">
            <img src={heroImg} className="hero-img" alt="hero-img"/>

            <div className="hero-text">
                <h3>Te damos la bienvenida a Serenity</h3>
                <h1>El apoyo que necesitas</h1>
                <p>Conecta con nuestros especialistas y déjanos acompañarte a mejorar tu bienestar emocional.</p>
                <div className="button-group flex">
                    <Link to="/info-ayuda/">
                        <Button buttonStyle="btn-primary">Información de Ayuda</Button>
                    </Link>
                    <div className="espacio-entre-componentes"></div>
                    <Link to="/especialistas/">
                        <Button buttonStyle="btn-outline">Especialistas</Button>
                    </Link>
                </div>
            </div>
       </div>
        
    )

}
// function redirectTo(arg0: string) {
//     throw new Error("Function not implemented.");
// }

