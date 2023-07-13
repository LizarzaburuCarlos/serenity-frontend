import './ver-info.css'
import { Spin, Tabs } from "antd"
import { LoadingOutlined, } from '@ant-design/icons'
import { useEffect, useState } from "react";
import { PresentationInformationPage } from "./presentation";
import TabPane from "antd/es/tabs/TabPane";
import { Institutions } from '../../components/Institutions';




const circleIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
export const InfoAyudaPag = () => {
    const [loading, setLoading] = useState<boolean>(true);





    useEffect(() => {
        setLoading(false)
    },);



    return (
        <>
            <Spin spinning={loading} className="h-100" indicator={circleIcon}>
                <PresentationInformationPage />
                <section className='content p-10 sm:p-20 -mb-32' style={{ backgroundColor: '#EDF0F7' }}>
                    <div className='content w-full'>
                        <Tabs
                            defaultActiveKey='1'
                            centered
                            size='large'
                        >
                            <TabPane tab='Inicio' key='1'>
                                <div className='descripcion mt-5 mb-10'>
                                    <div className='especialidad-title mb-5 text-center'>
                                        ¿Cómo obtener ayuda?
                                    </div>
                                    <div className='especialidad-paragraph text-justify'>
                                        No dudes en buscar ayuda psicológica si la necesitas. Habla con amigos o familiares cercanos o acude a un profesional. Serenity te ofrece una forma fácil y segura de encontrar especialistas en diferentes áreas de la psicología. Cuida tu bienestar emocional, no tengas miedo de pedir ayuda. Recuerda que no estás solo y hay personas dispuestas a ayudarte. ¡Toma el primer paso y pide ayuda hoy mismo!
                                    </div>
                                </div>
                                <div className="ayuda mt-10 mb-10 flex justify-center flex-wrap">
                                    <div className='seccion-ayuda w-full'>

                                        <div className="especialidad-title1  mb-5 text-center ">
                                            ¿Dónde acceder a ayuda?
                                        </div>


                                        <section className="information flex justify-around mt-5 mb-10 w-full flex-wrap">
                                            <img className="rounded-md" src="https://centropsicologiahemisferios.es/wp-content/uploads/2020/12/hemisferios-post-1.jpg" alt="psicologo" />
                                            <img className="rounded-md" src="https://i1.wp.com/expresasalud.com/wp-content/uploads/2020/02/beneficios-de-la-terapia-psicologica-1.jpg" alt="psicologo" />

                                        </section>
                                        <div className="info-paragraph w-full">
                                            Si estás buscando ayuda psicológica en Trujillo, existen diversas opciones a las que puedes acudir. Una de las alternativas es utilizar Serenity, una plataforma en línea que te permite encontrar especialistas en salud mental en tu área de manera fácil y rápida <br /><br />

                                            En <b>Serenity</b>, puedes buscar por especialidad y filtrar los resultados según tus preferencias. Además, puedes leer las reseñas y calificaciones de otros pacientes para tomar una decisión informada sobre el profesional que deseas consultar.<br /><br />

                                            También puedes buscar en directorios en línea de psicólogos y terapeutas en Trujillo. Es posible que algunas clínicas y hospitales también ofrezcan servicios de salud mental, así que asegúrate de investigar todas tus opciones.<br /><br />

                                            Recuerda que buscar ayuda psicológica es un paso importante para cuidar de tu bienestar emocional. No dudes en pedir ayuda si la necesitas, y no te rindas si no encuentras a alguien adecuado de inmediato. La terapia puede ser un proceso de prueba y error, pero el esfuerzo vale la pena para mejorar tu calidad de vida.
                                        </div>

                                    </div>
                                    <div className='instituciones'>
                                        <Institutions />
                                    </div>

                                </div>


                            </TabPane>
                            <TabPane tab="Estrés" key='2'>
                                <div className="ayuda mt-10 mb-10">
                                    <div className='seccion-ayuda'>

                                        <div className="especialidad-title  mb-5 text-center ">
                                            ¿Qué es el estrés?
                                        </div>


                                        <section className="information mt-5 mb-10">
                                            <img className="rounded-md   " src="https://terapica.mx/wp-content/uploads/2019/02/Blog-Terapica-Estres-Laboral-2021-4.jpg" />
                                        </section>
                                        <div className="info-paragraph">
                                            El estrés es una respuesta física y emocional normal del cuerpo ante situaciones que se perciben como desafiantes o amenazantes. El estrés puede ser positivo, como cuando nos prepara para una competencia deportiva o una presentación importante en el trabajo, pero cuando el estrés se prolonga o se vuelve crónico, puede tener efectos negativos en la salud física y mental. Los síntomas comunes del estrés incluyen dolores de cabeza, dolores musculares, fatiga, problemas de sueño, ansiedad y depresión.

                                            <br /><br />
                                            Para sobrellevar el estrés, es importante aprender a identificar las situaciones que lo desencadenan y desarrollar habilidades para manejarlo de manera efectiva. El ejercicio físico regular, la meditación, la relajación muscular progresiva y el yoga son algunas de las técnicas de relajación que pueden ayudar a reducir el estrés. También es importante tener un estilo de vida saludable, incluyendo una dieta equilibrada, suficiente descanso y tiempo para actividades de ocio y relaciones sociales.

                                            <br /><br />
                                            Otras estrategias para sobrellevar el estrés incluyen la gestión del tiempo y la planificación, el establecimiento de límites saludables en el trabajo y en las relaciones personales, y la práctica de técnicas de resolución de problemas efectivas. La terapia también puede ser útil para aprender a manejar el estrés, especialmente en casos de estrés crónico o trastornos de ansiedad. En resumen, es importante identificar y abordar el estrés de manera efectiva para mantener una buena salud física y mental.
                                        </div>


                                    </div>
                                    <div className='instituciones'>
                                        <Institutions />
                                    </div>


                                </div>
                            </TabPane>
                            <TabPane tab="Depresión" key='3'>
                                <div className="ayuda mt-10 mb-10">
                                    <div className='seccion-ayuda'>

                                        <div className="especialidad-title  mb-5 text-center ">
                                            ¿Qué es la depresión?
                                        </div>


                                        <section className="information mt-5 mb-10">
                                            <img className="rounded-md   " src="https://www.clarin.com/img/2022/02/16/la-depresion-afecta-al-5___TLlasXziI_640x361__1.jpg" />
                                        </section>
                                        <div className="info-paragraph">
                                            La depresión es un trastorno del estado de ánimo que se caracteriza por una sensación profunda de tristeza, pérdida de interés o placer en actividades que antes eran placenteras, cambios en el apetito y en el patrón de sueño, fatiga, falta de energía, dificultades para concentrarse, sentimientos de inutilidad, culpa, desesperanza y pensamientos recurrentes de muerte o suicidio. La depresión es un problema de salud mental grave y común que puede afectar a personas de todas las edades, géneros y orígenes culturales. <br /><br />
                                            La depresión puede tener diversas causas, incluyendo factores biológicos, psicológicos y sociales. Los factores biológicos incluyen desequilibrios químicos en el cerebro, problemas hormonales y genéticos. Los factores psicológicos incluyen el estrés, el trauma y la baja autoestima. Los factores sociales incluyen la falta de apoyo social, la discriminación y el aislamiento. A menudo, la depresión se produce como resultado de una combinación de estos factores. <br /><br />
                                            Si crees que estás experimentando síntomas de depresión, es importante que busques ayuda profesional. Un profesional de la salud mental puede evaluar tus síntomas y recomendarte un tratamiento adecuado. Las opciones de tratamiento para la depresión incluyen la psicoterapia y los medicamentos antidepresivos.
                                        </div>


                                    </div>
                                    <div className='instituciones'>
                                        <Institutions />
                                    </div>


                                </div>
                            </TabPane>
                            <TabPane tab="Ansiedad" key='4'>
                                <div className="ayuda mt-10 mb-10">
                                    <div className='seccion-ayuda'>

                                        <div className="especialidad-title  mb-5 text-center ">
                                            ¿Qué es la ansiedad?
                                        </div>


                                        <section className="information mt-5 mb-10">
                                            <img className="rounded-md   " src="https://static.wixstatic.com/media/0806eb_5bca102be4944dc69ea6299395ac59d4~mv2.png/v1/fit/w_1000%2Ch_500%2Cal_c%2Cq_80,enc_auto/file.jpg" />
                                        </section>
                                        <div className="info-paragraph">
                                            La ansiedad es una respuesta natural del cuerpo a situaciones estresantes o amenazantes. Se manifiesta como una sensación de preocupación o miedo intenso, acompañada de síntomas físicos como palpitaciones, sudoración excesiva, tensión muscular y dificultad para respirar. Si bien la ansiedad es una respuesta normal en situaciones estresantes, cuando se vuelve excesiva e interfiere con la vida diaria, puede convertirse en un trastorno de ansiedad.
                                            <br /><br />
                                            Una forma de sobrellevar la ansiedad es a través de la práctica de técnicas de relajación, como la meditación, la respiración profunda y la relajación muscular progresiva. Estas técnicas ayudan a reducir los síntomas físicos de la ansiedad y a disminuir la respuesta de lucha o huida del cuerpo. También es importante identificar y abordar las causas subyacentes de la ansiedad, que pueden incluir problemas emocionales, situaciones estresantes o un estilo de vida poco saludable. <br /><br />
                                            Otra forma de manejar la ansiedad es a través de la terapia, ya sea individual o grupal. La terapia puede ayudar a identificar y abordar las causas subyacentes de la ansiedad, así como a enseñar habilidades para manejar los síntomas. En algunos casos, se pueden recomendar medicamentos para controlar los síntomas de la ansiedad. Es importante recordar que la ansiedad es tratable y que con el tratamiento adecuado, la mayoría de las personas pueden controlar sus síntomas y llevar una vida plena y satisfactoria.
                                        </div>


                                    </div>
                                    <div className='instituciones'>
                                        <Institutions />
                                    </div>


                                </div>
                            </TabPane>
                            <TabPane tab="Problemas alimenticios" key='5'>
                                <div className="ayuda mt-10 mb-10">
                                    <div className='seccion-ayuda'>

                                        <div className="especialidad-title  mb-5 text-center ">
                                            ¿Qué es son los problemas alimenticios?
                                        </div>


                                        <section className="information mt-5 mb-10">
                                            <img className="rounded-md   " src="https://marvel-b1-cdn.bc0a.com/f00000000130513/www.physicianpartnersofamerica.com/es/wp-content/uploads/sites/2/2017/12/Counseling-Provides-Treatment-of-Eating-and-Food-Issues.jpg" />
                                        </section>
                                        <div className="info-paragraph">
                                            Los problemas alimenticios son trastornos que afectan la relación de una persona con la comida y su propio cuerpo. Estos trastornos incluyen la anorexia, la bulimia y el trastorno por atracón. La anorexia se caracteriza por una obsesión por la delgadez y una restricción severa de la ingesta de alimentos, mientras que la bulimia implica atracones de comida seguidos de purgas o ejercicios excesivos. El trastorno por atracón se caracteriza por episodios recurrentes de atracones de comida, pero sin comportamientos compensatorios como la purga.<br /><br />
                                            Para sobrellevar los problemas alimenticios, es importante buscar tratamiento de profesionales de la salud mental especializados en trastornos alimenticios. La terapia puede ayudar a identificar y abordar las causas subyacentes del problema alimenticio y a desarrollar estrategias efectivas para manejar los pensamientos y comportamientos alimenticios disfuncionales. En algunos casos, se pueden recomendar medicamentos para tratar síntomas específicos como la ansiedad o la depresión.<br /><br />
                                            Además, es importante desarrollar una relación saludable con la comida y el cuerpo. Esto puede incluir practicar la alimentación intuitiva, que implica prestar atención a las señales del cuerpo para comer cuando se tiene hambre y parar cuando se está satisfecho, en lugar de seguir dietas o restricciones alimenticias arbitrarias. También es importante rodearse de un entorno de apoyo, que incluye familiares, amigos y grupos de apoyo de personas que han pasado por experiencias similares.
                                        </div>


                                    </div>
                                    <div className='instituciones'>
                                        <Institutions />
                                    </div>

                                </div>
                            </TabPane>
                            <TabPane tab="Problemas de Parejas" key='6'>
                                <div className="ayuda mt-10 mb-10">
                                    <div className='seccion-ayuda'>

                                        <div className="especialidad-title  mb-5 text-center ">
                                            ¿Qué es son los problemas de pareja?
                                        </div>


                                        <section className="information mt-5 mb-10">
                                            <img className="rounded-md   " src="https://psicocode.com/wp-content/uploads/2016/02/problemas-de-pareja-1.jpg" />
                                        </section>
                                        <div className="info-paragraph">
                                            Los problemas de pareja son comunes y pueden surgir por diversas razones. Algunas de las causas más comunes incluyen la falta de comunicación, la falta de compromiso, la desigualdad en la relación, la infidelidad y la dificultad para resolver conflictos. Los problemas de pareja pueden causar estrés emocional y físico, y pueden afectar la calidad de vida de ambas partes involucradas.

                                            <br /><br />
                                            Para sobrellevar los problemas de pareja, es importante reconocer y abordar los problemas en su inicio. La comunicación es clave para resolver conflictos y mantener una relación saludable. Es importante que ambas partes se escuchen y se respeten mutuamente. Además, es esencial tener un compromiso mutuo para trabajar en la relación y hacer cambios necesarios.

                                            <br /><br />
                                            Es importante recordar que cada relación es única y puede requerir diferentes estrategias para sobrellevar los problemas. En algunos casos, puede ser beneficioso buscar terapia de pareja para ayudar a abordar los problemas y aprender habilidades efectivas de comunicación y resolución de conflictos. También es importante trabajar en la autoestima individual, ya que una relación saludable requiere dos personas saludables emocionalmente. En resumen, la clave para sobrellevar los problemas de pareja es el compromiso y la comunicación efectiva entre ambas partes involucradas.
                                        </div>


                                    </div>
                                    <div className='instituciones'>
                                        <Institutions />
                                    </div>

                                </div>
                            </TabPane>

                        </Tabs>
                    </div>
                </section>
            </Spin>
        </>
    )

}