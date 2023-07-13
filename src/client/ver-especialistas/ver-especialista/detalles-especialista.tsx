import './detalles-especialista.css'

export function DetallesEspecialistaPage(props){
    
    return(
        <div className="content text-center sm:p-10 mb-10">
            <div className="content__title mb-12">
                Detalles del especialista
            </div>
            <div className="content__paragraphs flex flex-col md:flex-row gap-10 text-justify">
                <div className="content__paragraph content__paragraph--first flex-1">
                    Titulo:  <br />
                    {props.title}
                </div>
                <div className="content__paragraph content__paragraph--content__second flex-1">
                    Institución: <br />
                    {props.institution}
                </div>
                <div className="content__paragraph content__paragraph--content__third flex-1">
                    E-mail: <br />
                    {props.email}
                </div>
            </div>
        </div>
    )
}