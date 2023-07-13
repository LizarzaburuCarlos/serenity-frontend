import './Cita.css'
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, Modal, Popconfirm, Select, Tooltip,} from 'antd';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { getUserByID } from "../shared/services/user.service";
import { useEffect, useState } from 'react';
import { ReserveType } from '../shared/types/reserve.type';
import { editReserve } from '../shared/services/reserve.service';
import dayjs from 'dayjs';

export function CitaComponent(props){

    const [especialista, setEspecialista] = useState('');
    const [dataForm, setDataForm] = useState<any>({});
    const [form] = Form.useForm();
    const cita = props.cita
    const fecha = new Date(cita.date);
    const fechaFormateada = format(fecha, "EEEE dd 'de' MMMM, yyyy", { locale: es });
    const fechaFinal = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);

    const [modalEditOpen, setModalEditOpen] = useState(false);

    useEffect(() => {
        
        getUserByID(cita.userId)
          .then(user => setEspecialista(user.data.name + " " + user.data.lastName))
          .catch(error => console.log('Error al obtener el usuario:', error));
       
      }, []);

      const handleEditClick = (item: ReserveType) => {
      
        const dateObject = new Date(item.date);
        const dayjsDate = dayjs(dateObject);
        const editedDataForm: any = {
          ...item,
          date: dayjsDate,
        };
        setDataForm(editedDataForm);
        console.log(editedDataForm);
        
        setModalEditOpen(true);
        
      };
   
      const handleFormSubmit = async () => {
        
            try {

                const values = await form.validateFields();
                console.log(values);
                
                const fechaza = values.date.$d
            
                const updatedData = {
                    ...dataForm, // Obtiene todos los atributos del objeto original
                    ...values,
                    date: fechaza 
                  };
                  delete updatedData.id;
                  delete updatedData.clientId;
                  delete updatedData.userId;

                
            console.log(updatedData);
            
            await editReserve(updatedData, dataForm.id);
            props.onUpdate();
            setModalEditOpen(false);
            } catch (error) {
            console.log("Error al editar la reserva:", error);
            
            }
      };

    return (
        <>
        <div className="cita flex col-span-2 md:col-span-1 w-3/4">
            <div className="cita__side w-3">
            </div>
            <div className="cita__content p-10 w-full flex flex-col md:flex-row items-center justify-between">
                <div className="cita__data">
                    <div className='cita__title text-lg font-semibold'>
                        {especialista}
                    </div>
                    <div className='cita__paragraph text-base font-medium'>
                        {fechaFinal}
                    </div>
                </div>
                <div className="cita__actions flex gap-1 pl-0 mt-10 md:mt-0 md:pl-5">
                    <button onClick={() => props.showInfoModal({...cita, fechaFinal})} className={'cita__button cita__button--see w-10 sm:w-14 h-10 sm:h-14 flex items-center justify-center'}>
                        <EyeOutlined />
                    </button>
                    {props.container && (
                        <button className='cita__button cita__button--edit w-10 sm:w-14 h-10 sm:h-14 flex items-center justify-center'
                        onClick={() => handleEditClick(props.cita)}
                        >
                            <EditOutlined />
                        </button>
                    )}
                    {props.container && (
                        
                        <Tooltip title="Eliminar">
                            <Popconfirm
                                key={1}
                                title="¿Está seguro de cancelar esta cita?"
                                onConfirm={() => props.handleDelete(cita.id)}
                                onCancel={() => console.log("cancel")}
                                okText="Sí"
                                cancelText="No"
                                okButtonProps={{ style: { background: '#2d3648' } }}
                            >
                                <button className='cita__button cita__button--del w-10 sm:w-14 h-10 sm:h-14 flex items-center justify-center'>
                                    <DeleteOutlined />
                                </button>
                            </Popconfirm>
                        </Tooltip>
                    )}
                </div>
            </div>
        </div>
        <Modal
            title="Editar información de cita"
            centered
            open={modalEditOpen}
            onCancel={() => {

                setModalEditOpen(false);
                setDataForm({});
            }}
            footer={[
                <Button key="guardar" type="primary" style={{ backgroundColor: '#2d3648'}} onClick={() => form.submit()} htmlType="submit">
                  Guardar
                </Button>,
                <Button key="cancelar" onClick={() => setModalEditOpen(false)}>
                  Cancelar
                </Button>,
                
              ]}
            >
           <Form
                form={form}
                initialValues={dataForm}
                onFinish={handleFormSubmit}
                >
                <Form.Item label="Fecha" name="date" rules={[{ required: true, message: 'Selecciona una fecha' }]}>
                    <DatePicker style={{marginTop: "0px !important"}} />
                </Form.Item>
                
                <Form.Item label="Descripción" name="description" rules={[{ required: true, message: 'Escribe una descripcion' }]} >
                    <Input value={dataForm.description} />
                </Form.Item>
                
                <Form.Item label="Horario" name="modality" rules={[{ required: true, message: 'Selecciona una horario' }]} >
                    <Select>
                    <Select.Option value="DAY">Mañana</Select.Option>
                    <Select.Option value="AFTERNOON">Tarde</Select.Option>
                    <Select.Option value="NIGHT">Noche</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    </>
    )

}