import "./Services.css"
import ServiceItem from "./ServiceItem"
import cita from "/img/citas.jpg"
import especialista from "/img/especialista.jpg"
import info from "/img/info.jpg"

export default function Services () { 

    return (
        <>

        <div className="services">
            <h1 className="font-bold">Nuestro Contenido</h1>
            <p>¿Cómo podemos ayudarte a mejorar tu calidad de vida?</p>
            <div className="services-cards">
                <ServiceItem image={info}
                title="Información Valiosa"
                text="Te ofrecemos artículos y recursos sobre temas relevantes de salud mental, como la ansiedad, la depresión, el estrés, la autoestima, entre otros."
                />
                <ServiceItem image={cita}
                title="Sacar Citas"
                text="El primer gran paso que podemos dar juntos hoy es aceptar que necesitamos ayuda. Estaremos aquí contigo en tu proceso de superar desafíos y sentirse mejor."
                />
                <ServiceItem image={especialista}
                title="Expertos de Salud Mental"
                text="En esta sección que destacamos a los especialistas en salud mental disponibles, incluyendo sus credenciales, áreas de especialización y experiencia."
                />
            </div> 
        </div>
       
       </>
        
    )

}