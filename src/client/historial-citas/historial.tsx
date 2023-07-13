import { Button, Form, Modal, Spin,   } from 'antd'
import './historial.css'
import { CheckOutlined, ClockCircleOutlined, FastBackwardOutlined } from '@ant-design/icons'
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { LoadingOutlined, } from '@ant-design/icons'
import { useEffect, useState } from "react";
import { CitaComponent } from '../../components/Cita';
import { HistorialPresentationComponent } from './presentation';
import { getReserveByClient, deleteReserve } from "../../shared/services/reserve.service";
import { getUserByID } from '../../shared/services/user.service';
import { UserType } from '../../shared/types/user.type';
import { useSerenityContext } from '../../shared/contexts/SerenityProvider';
const circleIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />


export const HistorialComponent = () =>{
    const [loading, setLoading] = useState<boolean>(true);
    // const [api, contextHolder] = notification.useNotification();
    const [modalInfoOpen, setModalInfoOpen] = useState(false);
    const [dataForm, setDataForm] = useState<any>({});
    const [form] = Form.useForm();
    const [cardsAceptadas, setCardsAceptadas] = useState([]);
    const [cardsEnEspera, setCardsEnEspera] = useState([]);
    const [cardsPasadas, setCardsPasadas] = useState([]);

    const [especialista, setEspecialista] = useState<number>(0);
    const [especialistaData, setEspecialistaData] = useState<UserType>();

    const { user } = useSerenityContext();
    const usuario = user.getUser();
      
    // const historial: Cita[] = [
    //     {
    //         id: 1,
    //         especialista: 'Juan Álvarez',
    //         horario: new Date('2023-05-10T17:00:00.000Z'),
    //         horas: '5:00pm - 6:00pm',
    //         status: 'scheduled'
    //     },
    //     {
    //         id: 2,
    //         especialista: 'Ana Flores',
    //         horario: new Date('2023-05-12T15:30:00.000Z'),
    //         horas: '3:30pm - 4:30pm',
    //         status: 'waiting'
    //     },
    //     {
    //         id: 3,
    //         especialista: 'Luis Martínez',
    //         horario: new Date('2023-05-15T10:00:00.000Z'),
    //         horas: '10:00am - 11:00am',
    //         status: 'completed'
    //     },
    //     {
    //         id: 4,
    //         especialista: 'Sofía Torres',
    //         horario: new Date('2023-05-20T18:30:00.000Z'),
    //         horas: '6:30pm - 7:30pm',
    //         status: 'scheduled'
    //     },
    //     {
    //         id: 5,
    //         especialista: 'María López',
    //         horario: new Date('2023-05-23T11:00:00.000Z'),
    //         horas: '11:00am - 12:00pm',
    //         status: 'waiting'
    //     },
    //     {
    //         id: 6,
    //         especialista: 'José Castro',
    //         horario: new Date('2023-05-25T16:00:00.000Z'),
    //         horas: '4:00pm - 5:00pm',
    //         status: 'completed'
    //     },
    //     {
    //         id: 7,
    //         especialista: 'Julia Pérez',
    //         horario: new Date('2023-05-30T19:00:00.000Z'),
    //         horas: '7:00pm - 8:00pm',
    //         status: 'scheduled'
    //     },
    //     {
    //         id: 8,
    //         especialista: 'Pedro García',
    //         horario: new Date('2023-06-01T14:00:00.000Z'),
    //         horas: '2:00pm - 3:00pm',
    //         status: 'waiting'
    //     },
    //     {
    //         id: 9,
    //         especialista: 'Carlos Ruiz',
    //         horario: new Date('2023-06-05T12:30:00.000Z'),
    //         horas: '12:30pm - 1:30pm',
    //         status: 'completed'
    //     },
    //     {
    //         id: 10,
    //         especialista: 'Laura González',
    //         horario: new Date('2023-06-10T17:30:00.000Z'),
    //         horas: '5:30pm - 6:30pm',
    //         status: 'scheduled'
    //     },
    //     {
    //         id: 11,
    //         especialista: 'Isabel Flores',
    //         horario: new Date('2023-06-12T15:00:00.000Z'),
    //         horas: '3:00pm - 4:00pm',
    //         status: 'waiting'
    //     },
    //     {
    //         id: 12,
    //         especialista: 'Juan Álvarez',
    //         horario: new Date('2023-05-10T17:00:00.000Z'),
    //         horas: '5:00pm - 6:00pm',
    //         status: 'scheduled'
    //     },
    //     {
    //         id: 13,
    //         especialista: 'Ana Flores',
    //         horario: new Date('2023-05-12T15:30:00.000Z'),
    //         horas: '3:30pm - 4:30pm',
    //         status: 'waiting'
    //     },
    //     {
    //         id: 14,
    //         especialista: 'Luis Martínez',
    //         horario: new Date('2023-05-15T10:00:00.000Z'),
    //         horas: '10:00am - 11:00am',
    //         status: 'completed'
    //     },
    //     {
    //         id: 15,
    //         especialista: 'Sofía Torres',
    //         horario: new Date('2023-05-20T18:30:00.000Z'),
    //         horas: '6:30pm - 7:30pm',
    //         status: 'scheduled'
    //     },
    //     {
    //         id: 16,
    //         especialista: 'María López',
    //         horario: new Date('2023-05-23T11:00:00.000Z'),
    //         horas: '11:00am - 12:00pm',
    //         status: 'waiting'
    //     },
    //     {
    //         id: 17,
    //         especialista: 'José Castro',
    //         horario: new Date('2023-05-25T16:00:00.000Z'),
    //         horas: '4:00pm - 5:00pm',
    //         status: 'completed'
    //     },
    //     {
    //         id: 18,
    //         especialista: 'Julia Pérez',
    //         horario: new Date('2023-05-30T19:00:00.000Z'),
    //         horas: '7:00pm - 8:00pm',
    //         status: 'scheduled'
    //     },
    //     {
    //         id: 19,
    //         especialista: 'Pedro García',
    //         horario: new Date('2023-06-01T14:00:00.000Z'),
    //         horas: '2:00pm - 3:00pm',
    //         status: 'waiting'
    //     },
    //     {
    //         id: 20,
    //         especialista: 'Carlos Ruiz',
    //         horario: new Date('2023-06-05T12:30:00.000Z'),
    //         horas: '12:30pm - 1:30pm',
    //         status: 'completed'
    //     },
    //     {
    //         id: 21,
    //         especialista: 'Laura González',
    //         horario: new Date('2023-06-10T17:30:00.000Z'),
    //         horas: '5:30pm - 6:30pm',
    //         status: 'scheduled'
    //     },
    //     {
    //         id: 22,
    //         especialista: 'Isabel Flores',
    //         horario: new Date('2023-06-12T15:00:00.000Z'),
    //         horas: '3:00pm - 4:00pm',
    //         status: 'waiting'
    //     },
    // ]
    const fetchData = async () => {
        try {
          const history = await getReserveByClient(usuario!.id);

          console.log(history.data);
          

            const nuevasCardsAceptadas = history.data.map(cita => {
                
                return (cita.state == "ACCEPTED" ?
                
                    <CitaComponent cita={cita} showInfoModal={showInfoModal}/>
                    : null
                )
            })
            const nuevasCardsEnEspera = history.data.map(cita => {
                return (cita.state == 'PENDING' ?
                    <CitaComponent cita={cita} onUpdate={fetchData} container={true} handleDelete={handleDelete} showInfoModal={showInfoModal} />
                    : null
                )
            })
            const nuevasCardsPasadas = history.data.map(cita => {
                return (cita.state == 'DONE' ?
                    <CitaComponent cita={cita} showInfoModal={showInfoModal}/>
                    : null
                )
            })

            setCardsAceptadas(nuevasCardsAceptadas);
            setCardsEnEspera(nuevasCardsEnEspera);
            setCardsPasadas(nuevasCardsPasadas);
            setLoading(false);

            } catch (error) {
            console.log("algo anda mal");
            setLoading(false);
            }
      };

    useEffect(() => {
        
        fetchData();
         
    }, []);

    // const openNotification = () => {
    //     api['success']({
    //         message: 'Notification Title',
    //         description:
    //           'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    //       });     
    // };

    const handleDelete = async (key: number) => {
        setLoading(true)
        await deleteReserve(key)
        fetchData();
        setLoading(false)
        
    };

    useEffect(() => {
        if (especialista) {
          const fetchEspecialistaData = async () => {
            try {
              const usuario = await getUserByID(especialista);
              setEspecialistaData(usuario.data);
            } catch (error) {
              console.log('Error al obtener los datos del especialista:', error);
            }
          };
      
          fetchEspecialistaData();
        }
      }, [especialista]);
      

      const convertDate = (date: any) => {
        if (!date) {
          return '';
        }
      
        const fecha = new Date(date);
      
        if (isNaN(fecha.getTime())) {
          return '';
        }
      
        const fechaFormateada = format(fecha, "EEEE dd 'de' MMMM, yyyy", { locale: es });
        return fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
      };

    const showInfoModal = (v) =>{
        
        if (!v) v = { id: 0, userId: especialista, date: '', state: '', description: '', modality: '' };

        if (v.userId) {
            setEspecialista(Number(v.userId));
        }

        setModalInfoOpen(true);
        setDataForm(v);
    }
    
    return (
        <>
            <Spin spinning={loading} className="h-100" indicator={circleIcon}>
                <HistorialPresentationComponent/>
                <section className='content mt-10 p-5 sm:p-20'>
                    <section className="card mb-20">
                        <div className="card__header h-24 flex items-center">
                            <div className="card__icon card__icon--accepted text-4xl	h-full w-24 flex items-center justify-center">
                                <CheckOutlined />
                            </div>
                            <div className="card__title card__title--accepted pl-10 w-full h-full flex items-center text-2xl font-bold">
                                Citas Aceptadas
                            </div>
                        </div>
                        <div className="card__content p-4 sm:p-10 grid grid-cols-1 xl:grid-cols-2 gap-4 justify-items-center">
                            {cardsAceptadas.length ? cardsAceptadas : <div className=' w-full h-full flex items-center justify-center'>
                                <p className='text-lg font-medium italic'>No se han encontrado citas registradas.</p></div>}
                        </div>
                    </section>
                    <section className="card mb-20">
                        <div className="card__header h-24 flex items-center">
                            <div className="card__icon card__icon--wait card__icon--accepted text-4xl	h-full w-24 flex items-center justify-center">
                                <ClockCircleOutlined />
                            </div>
                            <div className="card__title card__title--wait card__title--accepted pl-10 w-full h-full flex items-center text-2xl font-bold">
                                Citas en Espera
                            </div>
                        </div>
                        <div className="card__content p-4 sm:p-10 grid grid-cols-1 xl:grid-cols-2 gap-4 justify-items-center">
                            {cardsEnEspera.length ? cardsEnEspera : <div className=' w-full h-full flex items-center justify-center'>
                                <p className='text-lg font-medium italic'>No se han encontrado citas registradas.</p></div>}
                        </div>
                    </section>
                    <section className="card mb-20">
                        <div className="card__header h-24 flex items-center">
                            <div className="card__icon card__icon--past card__icon--accepted text-4xl	h-full w-24 flex items-center justify-center">
                                <FastBackwardOutlined />
                            </div>
                            <div className="card__title card__title--past card__title--accepted pl-10 w-full h-full flex items-center text-2xl font-bold">
                                Citas Pasadas
                            </div>
                        </div>
                        <div className="card__content p-4 sm:p-10 grid grid-cols-1 xl:grid-cols-2 gap-4 justify-items-center">
                            {cardsPasadas.length ? cardsPasadas : <div className=' w-full h-full flex items-center justify-center'>
                                <p className='text-lg font-medium italic'>No se han encontrado citas registradas.</p></div>}
                        </div>
                    </section>
                </section>
                <Modal
                title="Ver información de cita"
                centered
                open={modalInfoOpen}
                onCancel={() => {
                    setModalInfoOpen(false);
                    setEspecialistaData(undefined);
                  }}
                footer={[
                    <Button type="primary" style={{ backgroundColor: '#2d3648'}} onClick={() => setModalInfoOpen(false)}>
                        Cerrar
                    </Button>,
                ]}
                >
                    <Form form={form} initialValues={dataForm}>
                        <p><strong>Código:</strong> {dataForm.id} </p>
                        <p><strong>Descripción:</strong> {dataForm.description} </p>
                        {especialistaData && (
                        <p>
                            <strong>Especialista:</strong> {`${especialistaData.name} ${especialistaData.lastName}`}
                        </p>
                        )}
                        <p><strong>Fecha:</strong> {convertDate(dataForm.date)} </p>
                        <p><strong>Horario:</strong> {dataForm.modality === 'DAY' ? 'Mañana' : 
                        dataForm.modality === 'AFTERNOON' ? 'Tarde' : 
                        dataForm.modality === 'NIGHT' ? 'Noche' : 'Desconocido'} </p>
                        <p><strong>Estado:</strong> {dataForm.state === 'PENDING' ? 'En espera' : 
                        dataForm.state === 'ACCEPTED' ? 'Aceptado' : 
                        dataForm.state === 'DONE' ? 'Completado' : 'Desconocido'} </p>

                    </Form>   
                </Modal>
            </Spin>
        </>
    )
}