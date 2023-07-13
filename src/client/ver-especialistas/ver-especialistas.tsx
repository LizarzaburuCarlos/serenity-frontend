import './ver-especialistas.css'
import { Spin, Tabs } from "antd"
import { LoadingOutlined, } from '@ant-design/icons'
import { useEffect, useState } from "react";
import { PresentationEspecialistasPage } from "./presentation";
import TabPane from "antd/es/tabs/TabPane";
import { CardComponent } from "../../components/Card";
import { getAllUsers } from '../../shared/services/user.service';
import { getAllAI } from '../../shared/services/academic-information.service';

const circleIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

export const EspecialistasPag = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [especialistas, setEspecialistas] = useState<any[]>([]);

    const especialidades = {
        psiquiatria: "PSIQUIATRIA",
        psicologia: "PSICOLOGIA",
        terapiaO: "TERAPIA OCUPACIONAL",
        terapiaF: "TERAPIA FAMILIAR",
        psicoterapia: "PSICOTERAPIA",
    };

    // const especialistas = [
    //     {
    //         id: 1,
    //         nombres: 'Juan Álvarez',
    //         especialidad: 'Psiquiatría',
    //         detalles: '10 años de experiencia en el tratamiento de trastornos de ansiedad y depresión. Licenciatura en Medicina y Maestría en Psiquiatría en la Universidad Nacional de Trujillo.',
    //     },
    //     {
    //         id: 2,
    //         nombres: 'Marta López',
    //         especialidad: 'Psicología',
    //         detalles: '5 años de experiencia en el tratamiento de problemas de pareja y comunicación. Licenciada en Psicología y Maestría en Terapia de Pareja en la Universidad Privada del Norte.',
    //     },
    //     {
    //         id: 3,
    //         nombres: 'Carlos González',
    //         especialidad: 'Terapia Ocupacional',
    //         detalles: '8 años de experiencia en el tratamiento de trastornos de conducta en niños y adolescentes. Licenciado en Psicología y Maestría en Psicología Infantil en la Universidad César Vallejo.',
    //     },
    //     {
    //         id: 4,
    //         nombres: 'Ana Gutiérrez',
    //         especialidad: 'Terapia Ocupacional',
    //         detalles: '12 años de experiencia en el tratamiento de trastornos de ansiedad y fobias. Licenciada en Psicología y Doctorado en Terapia Cognitivo-Conductual en la Universidad de Lima.',
    //     },
    //     {
    //         id: 5,
    //         nombres: 'Carla García',
    //         especialidad: 'Psicología Clínica',
    //         detalles: 'La Dra. Carla García es una psicóloga clínica con experiencia en el tratamiento de diversos trastornos de la salud mental, incluyendo trastornos del estado de ánimo, trastornos de ansiedad y trastornos de la alimentación. Con una Licenciatura en Psicología en la Universidad Nacional de Trujillo y una Maestría en Psicología Clínica en la Universidad San Martín de Porres, la Dra. García utiliza un enfoque integrativo en su práctica, combinando diferentes técnicas terapéuticas, como la terapia cognitivo-conductual y la terapia de aceptación y compromiso, para adaptarse a las necesidades individuales de cada paciente.',
    //     },
    //     {
    //         id: 6,
    //         nombres: 'Pedro Ramírez',
    //         especialidad: 'Terapia Ocupacional',
    //         detalles: 'El Lic. Pedro Ramírez es un terapeuta ocupacional con más de 5 años de experiencia en el tratamiento de pacientes con problemas de salud mental. Con una Licenciatura en Terapia Ocupacional en la Universidad Nacional de Trujillo, el Lic. Ramírez se especializa en el diseño de actividades ...',
    //     },
    //     {
    //         id: 7,
    //         nombres: 'Ana Torres',
    //         especialidad: 'Terapia Ocupacional',
    //         detalles: 'Especialista en terapia ocupacional para el tratamiento de trastornos del espectro autista y otras discapacidades neurológicas. Licenciada en Terapia Ocupacional por la Universidad de Lima.',
    //     },
    //     {
    //         id: 8,
    //         nombres: 'Luisa Fernández',
    //         especialidad: 'Psicoterapia',
    //         detalles: 'Especialista en terapia de pareja y terapia de familia para la resolución de conflictos y mejora de la comunicación. Maestría en Psicología Clínica y de la Salud en la Universidad de Barcelona.',
    //     },
    // ]


    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await getAllUsersWithAI();
                setEspecialistas(response);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los especialistas:', error);
                setLoading(false);
            }
        }
        fetchData();
    },[]);

    const getAllUsersWithAI = async () => {
        try {
            const usersResponse = await getAllUsers();
            const users = usersResponse.data

            const academicInfoResponse = await getAllAI();
            const academicInfoArray = academicInfoResponse.data;
        
            const usersWithAI = users.map((user) => {
              const userAcademicInfo = academicInfoArray.find((info) => info.userId === user.id);
              return {
                ...user,
                ...(userAcademicInfo || {}), 
              };
            });  

            return usersWithAI as Array<typeof usersWithAI[number]>;
        } catch (error) {
            console.error('Error al obtener los especialistas:', error);
            throw error;
        }
    }

    const psicologos = especialistas.filter(especialista => especialista.rol === especialidades.psicologia);
    const psiquiatras = especialistas.filter(especialista => especialista.rol === especialidades.psiquiatria);
    const terapeutasO = especialistas.filter(especialista => especialista.rol === especialidades.terapiaO);
    const terapeutasF = especialistas.filter(especialista => especialista.rol === especialidades.terapiaF);
    const psicoterapeutas = especialistas.filter(especialista => especialista.rol === especialidades.psicoterapia);

    // const cardsPsicologia = especialistas.map((especialista, id) => (
    //     <CardComponent key={id} nombres={especialista.nombres} detalles={especialista.detalles} />
    // ))


    return (
        <>
            <Spin spinning={loading} className="h-100" indicator={circleIcon}>
                <PresentationEspecialistasPage />
                <section className='content p-10 sm:p-20 -mb-32' style={{ backgroundColor: '#EDF0F7' }}>
                    <div className='content w-full'>
                        <Tabs
                            defaultActiveKey='1'
                            centered
                            size='large'
                        >
                            <TabPane tab='Psicólogos' key='1'>
                                <div className='descripcion mt-5 mb-10'>
                                    <div className='especialidad-title mb-5'>
                                        Psicólogos
                                    </div>
                                    <div className='especialidad-paragraph text-justify'>
                                        Si estás buscando ayuda para superar problemas emocionales, conductuales o cognitivos, un psicólogo clínico podría ser una buena opción para ti. Los psicólogos clínicos son profesionales altamente capacitados que utilizan técnicas de terapia basadas en la evidencia para ayudarte a superar problemas como la depresión, la ansiedad, el trastorno de estrés postraumático y los trastornos alimentarios.
                                    </div>
                                </div>
                                <div className='flex flex-wrap justify-between w-full'>
                                    {psicologos.length ? psicologos.map(especialista => (
                                        <CardComponent id={especialista.userId} nombres={especialista.name + " " + especialista.lastName} detalles={especialista.description} />
                                    )) : <div className=' w-full h-full flex items-center justify-center'>
                                    <p className='text-lg font-medium italic'>No se han encontrado especialistas para esta especialidad.</p></div>}
                                </div>
                            </TabPane>
                            <TabPane className='flex flex-wrap justify-between' tab='Psiquiatras' key='2'>
                                <div className='descripcion mt-5 mb-10'>
                                    <div className='especialidad-title mb-5'>
                                        Psiquiatras
                                    </div>
                                    <div className='especialidad-paragraph text-justify'>
                                        Si estás lidiando con problemas de salud mental más graves, un psiquiatra podría ser el especialista adecuado para ti. Un psiquiatra es un médico especializado en trastornos mentales y puede ayudarte a recibir un diagnóstico preciso y a obtener el tratamiento que necesitas, ya sea a través de medicamentos recetados o terapia de conversación.
                                    </div>
                                </div>
                                <div className='flex flex-wrap justify-between w-full'>
                                    {psiquiatras.length ? psiquiatras.map(especialista => (
                                        <CardComponent id={especialista.userId} nombres={especialista.name + " " + especialista.lastName} detalles={especialista.description} />
                                    )): <div className=' w-full h-full flex items-center justify-center'>
                                    <p className='text-lg font-medium italic'>No se han encontrado especialistas para esta especialidad.</p></div>}
                                </div>
                            </TabPane>
                            <TabPane tab='Terapeutas familiares' key='3'>
                                <div className='descripcion mt-5 mb-10'>
                                    <div className='especialidad-title mb-5'>
                                        Terapeutas familiares
                                    </div>
                                    <div className='especialidad-paragraph text-justify'>
                                        Si estás experimentando dificultades en tus relaciones personales y deseas mejorar tu comunicación y resolver conflictos, un terapeuta familiar podría ser la opción adecuada para ti. Un terapeuta familiar puede ayudarte a trabajar en problemas de relaciones con miembros de tu familia y mejorar tus habilidades para resolver problemas.
                                    </div>
                                </div>
                                <div className='flex flex-wrap justify-between w-full'>
                                    {terapeutasF.length ? terapeutasF.map(especialista => (
                                        <CardComponent id={especialista.userId} nombres={especialista.name + " " + especialista.lastName} detalles={especialista.description} />
                                    )) : <div className=' w-full h-full flex items-center justify-center'>
                                    <p className='text-lg font-medium italic'>No se han encontrado especialistas para esta especialidad.</p></div>}
                                </div>
                            </TabPane>
                            <TabPane tab='Terapeutas ocupacionales' key='4'>
                                <div className='descripcion mt-5 mb-10'>
                                    <div className='especialidad-title mb-5'>
                                        Terapeutas ocupacionales
                                    </div>
                                    <div className='especialidad-paragraph text-justify'>
                                        Si estás experimentando dificultades en tus relaciones personales y deseas mejorar tu comunicación y resolver conflictos, un terapeuta familiar podría ser la opción adecuada para ti. Un terapeuta familiar puede ayudarte a trabajar en problemas de relaciones con miembros de tu familia y mejorar tus habilidades para resolver problemas.
                                    </div>
                                </div>
                                <div className='flex flex-wrap justify-between w-full'>
                                    {terapeutasO.length ? terapeutasO.map(especialista => (
                                        <CardComponent id={especialista.userId} nombres={especialista.name + " " + especialista.lastName} detalles={especialista.description} />
                                    )): <div className=' w-full h-full flex items-center justify-center'>
                                    <p className='text-lg font-medium italic'>No se han encontrado especialistas para esta especialidad.</p></div>}
                                </div>
                            </TabPane>
                            <TabPane tab='Psicoterapeutas' key='5'>
                                <div className='descripcion mt-5 mb-10'>
                                    <div className='especialidad-title mb-5'>
                                        Psicoterapeutas
                                    </div>
                                    <div className='especialidad-paragraph text-justify'>
                                        Si estás buscando un tratamiento a largo plazo para problemas emocionales y psicológicos, un psicoterapeuta podría ser una buena opción para ti. Los psicoterapeutas son profesionales altamente capacitados en la realización de terapia psicológica y pueden ayudarte a superar problemas como la depresión, la ansiedad, los trastornos alimentarios y los trastornos de personalidad.
                                    </div>
                                </div>
                                <div className='flex flex-wrap justify-between w-full'>
                                    {psicoterapeutas.length ? psicoterapeutas.map(especialista => (
                                        <CardComponent id={especialista.userId} nombres={especialista.name + " " + especialista.lastName} detalles={especialista.description} />
                                    )): <div className=' w-full h-full flex items-center justify-center'>
                                    <p className='text-lg font-medium italic'>No se han encontrado especialistas para esta especialidad.</p></div>}
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </section>
            </Spin>
        </>
    )

}