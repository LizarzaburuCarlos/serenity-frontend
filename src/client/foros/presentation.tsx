import './presentation.css'

export const ForosPresentationComponent = () => {
    return (
        <section className='presentation p-20 flex flex-col md:flex-row items-center justify-center'>
            <div className='content flex items-center justify-center text-center w-full'>
                <div className='max-w-lg relative'>
                    <div className="title -md:text-lg relative z-10">
                        Foros de ayuda 
                    </div>
                    <div className='subrayado absolute rounded w-full top-8 h-8 z-0 inset-0 mx-auto' />
                    <div className='paragraph mt-10'>
                        Encuentra apoyo y respuestas a tus preguntas relacionadas con la salud mental en nuestros foros en línea. Interactúa con especialistas y comparte experiencias en un entorno seguro y confidencial. Obtén orientación y consejos para mejorar tu bienestar emocional y llevar una vida más saludable. 
                    </div>
                </div>
            </div>
        </section>

    )
}