import './presentation.css'


export const HistorialPresentationComponent = () =>{
    return (
        <section className='presentation p-20 flex flex-col md:flex-row items-center justify-center'>
          <div className='content flex items-center justify-center text-center w-full'>
            <div className='max-w-lg relative'>
              <div className="title -md:text-lg relative z-10">
                Historial de Citas
              </div>
              <div className='subrayado absolute rounded w-full top-8 h-8 z-0 inset-0 mx-auto' />
              <div className='paragraph mt-10'>
                  ¿Te cuesta recordar todas las citas que has tenido con tus especialistas?
                  No te preocupes, con el Historial de Citas, podrás ver todas tus citas anteriores con especialistas, así como las próximas programadas, lo que te permitirá llevar un control más efectivo de tu progreso y tratamiento.
              </div>
            </div>
          </div>
        </section>
      )
  
}