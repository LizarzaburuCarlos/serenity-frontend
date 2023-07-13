import { Link } from 'react-router-dom'
import './Card.css'

export function CardComponent(props){

    console.log(props);
    

    return(
        <div className="contenedor-card p-10 max-w-xl flex justify-center flex-col md:flex-row items-center mb-10">
            <div className="contenedor-img mb-12 md:mb-0 md:mr-12">
                <img className="imagen" src="/img/user.png" alt="foto de usuario" />
            </div>
            <div className="info text-justify">
                <div className="nombres mb-5 text-center md:text-start">
                    {props.nombres}
                </div>
                <div className="detalles mb-5">
                    {props.detalles}
                </div>
                <div>
                    <Link to={`/especialistas/ver-especialista/${props.id}`}>
                        <button className="btn-ver">
                            Ver Perfil
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}