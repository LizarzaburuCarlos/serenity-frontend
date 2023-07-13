import './Us.css'
import foto1 from "/img/uss.jpg"
import foto2 from "/img/usss.jpg"

export default function AboutUs () { 

    return (
        <>
            <div className="about-us">
                <h1 className='font-bold'>¿Primera vez en Serenity?</h1>
                <p className='us-subtitle'>Permítenos presentarte nuestra plataforma</p>
                <div className="des-about-us">
                    <div className='des-text'>
                        <h2 className='font-semibold text-lg'>Estamos aquí para ti</h2>
                        <p className='text-justify'>Serenity es una página dedicada a apoyar la salud
                            mental de las personas en donde podrás encontrar
                            información útil y recursos para cuidar tu bienestar
                            emocional. Aquí encontrarás artículos y herramientas prácticas
                            para aprender a manejar el estrés, la ansiedad y 
                            otros problemas que pueden estar afectando a tu salud mental.
                            Además, puedes programar citas con nuestros especialistas en
                            salud mental para recibir tratamiento personalizado y 
                            apoyo en tu camino hacia una vida más saludable y feliz. En nuestra página, nos esforzamos por proporcionar un 
                            ambiente seguro y acogedor donde puedas encontrar la 
                            ayuda que necesitas.
                        </p>
                    </div>
                    <div className='image-us'>
                        <img src={foto1} />
                        <img src={foto2} />
                    </div>
                </div>
            </div>
            
            
       </>
        
    )

}