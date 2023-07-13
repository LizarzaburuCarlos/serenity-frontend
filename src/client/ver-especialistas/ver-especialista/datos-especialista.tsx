import './datos-especialista.css'

export function DatosEspecialistaPage(props) {
    console.log(props);
    
    return (
        <section className='presentation p-24 sm:p-32 flex flex-col md:flex-row items-center justify-center'>
            <div className="presentation__img w-4/12 flex-shrink-0 m-auto md:mr-20">
                <img className="mx-auto w-36 block" src="/img/user.png" alt="Foto de Usuario" />
            </div>
            <div className="presentation__datos w-8/12 relative">
                <div className="presentation__title text-center md:text-start relative z-10">
                    {props.name + " " + props.lastName}
                </div>
                <div className="presentation__undeline absolute rounded w-auto top-8 h-8 z-0 inset-0"></div>
                <div className="presentation__paragraph text-justify">
                    {props.description}
                    {/* La Dra. Gonzales tiene más de 10 años de experiencia en el campo de la salud mental. Ha trabajado en diferentes hospitales y clínicas en Lima y Trujillo, donde ha tratado una amplia gama de trastornos mentales, incluyendo depresión, ansiedad, trastornos del estado de ánimo, trastornos de personalidad, trastornos alimentarios y adicciones. También ha participado en proyectos de investigación y publicado artículos en revistas científicas especializadas en psiquiatría. */}
              </div>
            </div>
        </section>

    )
}