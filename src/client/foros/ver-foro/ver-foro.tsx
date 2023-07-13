import { ForoRptaComponent } from '../../../components/Foro-Rpta'
import { LikeOutlined, LoadingOutlined } from '@ant-design/icons'
import './ver-foro.css'
import { useEffect, useState } from 'react'
import { Spin } from 'antd'
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useParams } from 'react-router-dom'
import { getClientByID } from '../../../shared/services/client.service'
import { ClientType } from '../../../shared/types/client.type'
import { UserType } from '../../../shared/types/user.type'
import { getUserByID } from '../../../shared/services/user.service'

const circleIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

type ForoType = {
    id: number;
    title: string;
    idPersona: number;
    rol: string;
    fecha: Date;
    categoria: number;
    descripcion: string;
};

type CategoriaForoType = {
    id: number;
    name: string;
    color: number;
};

export const VerForoPag = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [publicacion, setPublicacion] = useState<ForoType>();
    const { id } = useParams();
    const idForo = id ? parseInt(id) : undefined;
    const [persona, setPersona] = useState<ClientType|UserType>();
    const [categoria, setCategoria] = useState<CategoriaForoType>();
    const categorias = [
        {
            id: 1,
            name: 'Ansiedad',
            color: 'border-teal-200 bg-teal-100 text-teal-500'
        },
        {
            id: 2,
            name: 'Depresión',
            color: 'border-blue-200 bg-blue-100 text-blue-500'
        },
        {
            id: 3,
            name: 'Trastornos Alimenticios',
            color: 'border-pink-200 bg-pink-100 text-pink-500'
        },
        {
            id:4,
            name: 'Autoestima',
            color: 'border-purple-200 bg-purple-100 text-purple-500'
        },
        {
            id:5,
            name: 'Trauma',
            color: 'border-orange-200 bg-orange-100 text-orange-500'
        },
        {
            id:6,
            name: 'Relaciones y Familia',
            color: 'border-green-200 bg-green-100 text-green-500'
        }
    ]

    const foros: ForoType[] = [
        {
          id: 1,
          title: 'Problemas con mi mamá',
          idPersona: 1,
          rol: 'PACIENTE',
          fecha: new Date(),
          categoria: 2,
          descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique placeat optio architecto quae veniam dolorum! Vitae eius, beatae, fuga dolores quo fugit odit praesentium consequuntur nihil quasi eligendi voluptates.',
        },
        {
          id: 2,
          title: 'La falta de motivación tiene solución',
          idPersona: 1,
          rol: 'ESPECIALISTA',
          fecha: new Date(),
          categoria: 1,
          descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique placeat optio architecto quae veniam dolorum! Vitae eius, beatae, fuga dolores quo fugit odit praesentium consequuntur nihil quasi eligendi voluptates.',
        },
      ];

      const encontrarForoPorId = (idForo: string | number) => {
        const id = typeof idForo === 'string' ? parseInt(idForo) : idForo;
        return foros.find((foro) => foro.id === id);
      };

      const getCliente = async (id: number): Promise<ClientType> => {
        try {
          const cliente = await getClientByID(id);
          return cliente.data as ClientType;
        } catch (error) {
          console.log("Algo anda mal" + error);
          throw error;
        }
      };

      const getEspecialista = async (id: number): Promise<UserType> => {
        try {
          const especialista = await getUserByID(id);
          return especialista.data as UserType;
        } catch (error) {
          console.log("Algo anda mal" + error);
          throw error;
        }
      };

      useEffect(() => {

        setLoading(true)
        const foro = encontrarForoPorId(idForo!!); 
     
        
        if (foro) {
            setPublicacion(foro)
            if (foro.rol === 'PACIENTE') {
                const fetchCliente = async () => {
                    const personaData = await getCliente(foro.idPersona)
                    setPersona(personaData)
                }   
                fetchCliente();
               
            } else {
                const fetchEspecialista = async () => {
                    const especialistaData = await getEspecialista(foro.idPersona)
                    setPersona(especialistaData);
                };
                fetchEspecialista();
            }
            const categoria = categorias.find((categoria) => categoria.id === foro?.categoria) as unknown as CategoriaForoType;
        setCategoria(categoria)
        setLoading(false)
        }
               
       
      }, [id]);
      

      const convertDate = (date: any) => {
        if (!date) {
          return "";
        }
    
        const fecha = new Date(date);
    
        if (isNaN(fecha.getTime())) {
          return "";
        }
    
        const fechaFormateada = format(fecha, "EEEE dd 'de' MMMM, yyyy", { locale: es });
        return fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
      };

    return (
        <Spin spinning={loading} className="h-100" indicator={circleIcon}>

            <section className="px-10 py-32 sm:px-20 -mb-32 h-full" style={{ backgroundColor: '#EDF0F7' }}>

                <div className="foro-card p-6 sm:p-10 rounded-xl bg-white">
                    <h3 className="foro-titulo text-xl sm:text-3xl font-bold mb-6">Título del Foro de Discusión</h3>
                    <div className="foro-identifiers md:flex justify-between">
                        <div className="profile flex relative mb-6 md:mb-0 items-center">
                            <div className="profile-pic ml-2 mr-4 w-16 h-16 rounded-xl overflow-hidden">
                                <div className='iconito w-6 h-6 rounded-lg absolute -bottom-2 left-0 flex justify-center items-center text-white font-bold'>P</div>
                                <img className="object-cover w-full h-full"  src={publicacion?.rol === 'PACIENTE' ? "/img/especialista.jpg" : "https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg"} alt="" />
                            </div>
                            <div className="profile-data">
                                <p className="profile-name text-md sm:text-lg font-semibold mb-1 ">{persona?.name + " " + persona?.lastName}</p>
                                <p className="profile-time text-md sm:text-lg text-gray-300 ">{convertDate(publicacion?.fecha)}</p>
                            </div>
                        </div>
                        <div className="tags flex items-center gap-4">
                            <div className={`tags-button rounded-3xl border-2 ${categoria?.color || 'border-gray-200 bg-gray-100 text-gray-500'} font-semibold py-2 px-4 sm:px-6 text-md text-center`}>
                                {categoria?.name || 'Categoría'}
                            </div>
                        </div>
                    </div>
                    <div className="foro-content py-6 w-full mb-616 sm:mb-0">
                        <p className="foro-paragraph text-md sm:text-lg text-justify">{publicacion?.descripcion}</p>
                    </div>
                    <div className="foro-buttons w-full items-center hidden relative gap-4">
                        <div className='foro-save w-14 rounded-xl bg-gray-100 flex justify-center gap-6 p-4'>
                            <LikeOutlined className='text-lg text-gray-600 font-bold' />
                        </div>
                        <p className='text-lg text-gray-600 font-semibold'>305</p>
                        <div className='profiles flex gap-2 absolute right-0  bottom-0'>
                            <div className='w-12 h-12 rounded-xl overflow-hidden'>
                                <img className='object-cover object-right w-full h-full' src="/img/info.jpg" alt="Perfil 1" />
                            </div>
                            <div className='w-12 h-12 absolute left-6 -top-4 rounded-xl border-4 border-white overflow-hidden'>
                                <img className='object-cover w-full h-full' src="/img/citas.jpg" alt="Perfil 1" />
                            </div>
                            <div className='w-12 h-12 rounded-xl bg-gray-100 flex justify-center items-center'>
                                <p className='text-xl text-gray-400'>+3</p>
                            </div>
                        </div>
                    </div>
                    <div className="foro-input w-full relative my-4">
                        <textarea className="resize-none h-auto rounded-xl p-4 text-md sm:text-lg focus:outline-none" placeholder="Ingresa tu comentario..." maxLength={250} rows={3} required />
                        <button className="foro-add w-fit rounded-xl bg-gray-100 flex items-center gap-6 p-4 absolute -bottom-6 right-6">
                            <span className="text-lg text-gray-600 font-bold">A</span>
                            <p className="text-md sm:text-lg text-gray-600 font-light whitespace-nowrap">Añadir respuesta</p>
                        </button>
                    </div>
                    <div className="my-responses">
                    </div>
                    <div className="all-responses my-10">
                        <h4 className='responses-title text-lg sm:text-2xl font-bold mb-6'>Todas las respuestas:</h4>
                        <ForoRptaComponent idForo={publicacion?.id} />
                       
                    </div>
                </div>
            </section>

        </Spin>
    )
}