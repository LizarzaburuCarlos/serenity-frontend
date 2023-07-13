import { Link } from 'react-router-dom'
import './Foro-Card.css'
import { LikeOutlined } from '@ant-design/icons'
import { getClientByID } from '../shared/services/client.service';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import { ClientType } from '../shared/types/client.type';
import { UserType } from '../shared/types/user.type';
import { getUserByID } from '../shared/services/user.service';

export const ForoCard = ({ foros }) => {

    const [clientes, setClientes] = useState<ClientType[]>();
    const [especialistas, setEspecialistas] = useState<UserType[]>();

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

    useEffect(() => {
        const fetchClientes = async () => {
          const clientesData = await Promise.all(
            foros.map((foro) => getCliente(foro.idPersona))
            );
        
          setClientes(clientesData)
          
        };
    
        fetchClientes();
       
      }, [foros]);

      useEffect(() => {
        const fetchEspecialistas = async () => {
          const especialistasData = await Promise.all(
            foros.map((foro) => getEspecialista(foro.idPersona))
          );
          setEspecialistas(especialistasData);
        };
      
        fetchEspecialistas();
      }, [foros]);
    

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
        <>
          {foros.map((foro) => {
            const persona = foro.rol === 'PACIENTE' ? clientes?.find((cliente) => cliente.id === foro.idPersona) : especialistas?.find((especialista) => especialista.id === foro.idPersona);
            const categoria = categorias.find((categoria) => categoria.id === foro.categoria);
            
            return (
              <section className="foro-card mb-5 p-6 sm:p-10 rounded-xl bg-white" key={foro.id}>
                <div>
                  <Link to={`/foros/ver-foro/${foro.id}`}>
                    <h3 className="foro-title text-xl sm:text-3xl font-bold mb-6 color-bg">{foro.title}</h3>
                  </Link>
                  <div className="foro-identifiers md:flex justify-between">
                    <div className="profile flex relative mb-6 md:mb-0 items-center">
                      <div className="profile-pic ml-2 mr-4 w-16 h-16 rounded-xl overflow-hidden">
                        <div className={`iconito w-6 h-6 rounded-lg absolute -bottom-2 left-0 flex justify-center items-center text-white font-bold ${foro.rol === 'CLIENTE' ? 'bg-blue-500' : 'bg-red-500'}`}>
                          {foro.rol === 'PACIENTE' ? 'P' : 'E'}
                        </div>
                        <img className="object-cover w-full h-full" src={foro.rol === 'PACIENTE' ? "/img/especialista.jpg" : "https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg"} alt="" />
                      </div>
                      <div className="profile-data">
                        <p className="profile-name text-md sm:text-lg font-semibold mb-1 ">{persona?.name + " " + persona?.lastName}</p>
                        <p className="profile-time text-md sm:text-lg text-gray-300 ">{convertDate(foro.fecha)}</p>
                      </div>
                    </div>
                    <div className="tags flex items-center gap-4">
                      <div className={`tags-button rounded-3xl border-2 ${categoria?.color || 'border-gray-200 bg-gray-100 text-gray-500'} font-semibold py-2 px-4 sm:px-6 text-md text-center`}>
                        {categoria?.name || 'Categoría'}
                      </div>
                    </div>
                  </div>
                  <div className="foro-content py-6 w-full mb-16 sm:mb-0">
                    <p className="foro-paragraph text-md sm:text-lg text-justify">{foro.descripcion}</p>
                  </div>
                  <div className="foro-buttons w-full justify-between sm:justify-start relative flex gap-4">
                    <div className='foro-save w-14 rounded-xl bg-gray-100 flex justify-center gap-6 p-4'>
                      <LikeOutlined className='text-lg text-gray-600 font-bold'/>
                    </div>
                    <Link to={`/foros/ver-foro/${foro.id}`}>
                      <div className="foro-add w-fit rounded-xl bg-gray-100 flex items-center gap-6 p-4">
                        <span className="text-lg text-gray-600 font-bold">A</span>
                        <p className="text-md sm:text-lg text-gray-600 font-light whitespace-nowrap">Añadir respuesta</p>
                      </div>
                    </Link>
                    <div className='profiles gap-2 absolute right-0 hidden  bottom-20 sm:bottom-0'>
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
                </div>
              </section>
            );
          })}
        </>
      );

  
    

  };
