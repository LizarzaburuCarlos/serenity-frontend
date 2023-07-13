import './presentation.css'

export const PresentationEspecialistasPage = () => {
    return (
        <section className='presentation p-20 flex items-center justify-center'>
            <div className='content text-center'>
                <div className='max-w-lg relative'>
                    <div className="title relative z-10">
                        Especialistas
                    </div>
                    <div className='subrayado absolute rounded w-96 top-8 h-8 z-0 inset-0 mx-auto' />
                    <div className='paragraph mt-10'>
                        Encontrar el especialista adecuado para atender nuestras necesidades de salud mental puede ser un desafío, pero en nuestra plataforma web estamos comprometidos a facilitar este proceso para nuestros usuarios.
                    </div>
                </div>
            </div>
        </section>
    )
}