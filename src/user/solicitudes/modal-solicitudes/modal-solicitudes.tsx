import { Button, Modal } from "antd";

type ModalSolicitudesProps = {
  modalSolicitudesOpen: boolean;
  setModalSolicitudesClose: () => void;
};

export const ModalSolicitudes = ({
  modalSolicitudesOpen,
  setModalSolicitudesClose,
  reserve
}: ModalSolicitudesProps) => {
  if (!reserve) {
    return null; // Si no hay reserva seleccionada, no mostrar el modal
  }

  

  return (
    <Modal
      title="Reserva de cita"
      centered
      open={modalSolicitudesOpen}
      onCancel={setModalSolicitudesClose}
      footer={
        <div className="py-3 flex justify-center items-center gap-x-2">
          <Button
            type="primary"
            style={{ backgroundColor: "#2d3648" }}
            onClick={setModalSolicitudesClose}
          >
            Cerrar
          </Button>
        </div>
      }
    >
      <div className="w-full py-6">
        <div className="flex gap-x-6 items-center">
          <div className="w-10 h-10 bg-slate-500 rounded-full"></div>
          <div className="text-base font-bold">{reserve.description}</div>
        </div>

        <div className="py-6">
          <div className="text-base font-bold my-5">Datos de reserva</div>
          <div className="text-base my-2">
          <b>Fecha: </b>{reserve.date}
          </div>
          <div className="text-base my-2">
          <b>Modalidad: </b>{reserve.modality}
          </div>
          <div className="text-base my-2">
          <b>Estado: </b>{reserve.state}
          </div>

          
        </div>
      </div>
    </Modal>
  );
};
