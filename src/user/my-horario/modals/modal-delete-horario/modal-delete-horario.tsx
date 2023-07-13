import { Button, Modal } from "antd";
import { useMutation } from "react-query";
import { deleteSchedule } from "../../../../shared/services/schedule.service";

type ModalDeleteHorarioProps = {
  modalDeleteOpen: boolean;
  setModalDeleteClose: () => void;
  id?: number;
};

export const ModalDeleteHorario = ({
  modalDeleteOpen,
  setModalDeleteClose,
  id,
}: ModalDeleteHorarioProps) => {
  const { mutate } = useMutation(
    "query-delete-horario",
    async () => {
      return await deleteSchedule(id ?? 0);
    },
    {
      onSuccess: () => {
        setModalDeleteClose();
      },
    }
  );

  const onDeleteHorario = () => {
    mutate();
  };

  return (
    <Modal
      title="Eliminar Horario"
      centered
      open={modalDeleteOpen}
      onCancel={setModalDeleteClose}
      footer={
        <div className="py-3 flex justify-center items-center gap-x-2">
          <Button
            type="primary"
            style={{ backgroundColor: "#2d3648" }}
            onClick={onDeleteHorario}
          >
            Aceptar
          </Button>
          <Button
            type="primary"
            style={{ border: "1px solid #2d3648", color: "black" }}
            onClick={setModalDeleteClose}
          >
            Cancelar
          </Button>
        </div>
      }
    >
      <div className="text-base flex justify-center">
        Estás seguro/a de eliminar este horario?
      </div>
    </Modal>
  );
};
