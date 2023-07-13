import { ForosPresentationComponent } from "./presentation"
import { Spin } from "antd"
import { LoadingOutlined, } from '@ant-design/icons'
import { useEffect, useState } from "react"
import './ver-foros.css'
import { ForoCard } from "../../components/Foro-Card"
import { ModalForo } from "./modal-foro/modal-foro"

const circleIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />


export const ForosPag = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [modalForoOpen, setModalForoOpen] = useState<boolean>(false);

    const openModalForo = () => {
        setModalForoOpen(() => true);
    };

    const closeModalForo = () => {
        setModalForoOpen(() => false);
    };

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        fetchData();
    },[]);


    const foros = [
        {
            id: 1,
            title: 'Problemas con mi mamá',
            idPersona: 1,
            rol: 'PACIENTE',
            fecha: new Date(),
            categoria: 2,
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique placeat optio architecto quae veniam dolorum! Vitae eius, beatae, fuga dolores quo fugit odit praesentium consequuntur nihil quasi eligendi voluptates.'
        },
        {
            id: 2,
            title: 'La falta de motivación tiene solución',
            idPersona: 1,
            rol: 'ESPECIALISTA',
            fecha: new Date(),
            categoria: 1,
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique placeat optio architecto quae veniam dolorum! Vitae eius, beatae, fuga dolores quo fugit odit praesentium consequuntur nihil quasi eligendi voluptates.'
        },   
    ]


    return (
        <Spin spinning={loading} className="h-100" indicator={circleIcon}>
            <div className="flotante fixed h-16 w-16 z-50 bg-black bottom-6 right-6 rounded-full flex items-center justify-center" onClick={openModalForo}>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 528.899 528.899"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z"></path> </g> </g></svg>
            </div>
            <ForosPresentationComponent />
            <section className='foros p-10 sm:p-20 -mb-32' style={{ backgroundColor: '#EDF0F7' }}>
                <div className="add-thread flex items-center justify-between px-10 py-6 bg-white rounded-xl mb-10">
                    <p className="text-lg text-gray-400">Bienvenido/a a los foros...</p>
                    <div className="btn-add w-12 h-12 rounded-xl flex justify-center items-center">
                        <p className="text-white text-3xl">+</p>
                    </div>
                </div>
                <ForoCard foros={foros} />
                <ModalForo
                    modalForoOpen={modalForoOpen}
                    setModalForoClose={closeModalForo}
                />

            </section>
        </Spin>
    )
}