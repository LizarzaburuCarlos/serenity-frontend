import "./my-horario.css";
import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import MyHorarioCalendar from "./my-horario-calendar/my-horario-calendar";
import { ModalDeleteHorario } from "./modals/modal-delete-horario/modal-delete-horario";
import { ModalHorario } from "./modals/modal-horario/modal-horario";
import { useQuery } from "react-query";
import { getAllSchedules } from "../../shared/services/schedule.service";

const circleIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const MyHorarioComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [modalInfoOpen, setModalInfoOpen] = useState<boolean>(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState<boolean>(false);
  const [titleState, setTitleState] = useState<string>("");
  const [isEdit, setIsEdit] = useState(false);
  const [idHorario, setIdHorario] = useState<number | undefined>(undefined);
  const [toggle, setToggle] = useState(false);

  const [horarios, setHorarios] = useState([]);

  const { refetch } = useQuery(
    "query-get-horario-all",
    async () => {
      return await getAllSchedules();
    },
    {
      enabled: false,
      onSuccess: (data) => {
        setHorarios(data.data);
      },
    }
  );

  const openModalCreate = () => {
    setTitleState("Crear Horario");
    setModalInfoOpen(true);
    setIsEdit(false);
    setIdHorario(undefined);
  };

  const openModalEdit = (id: number) => {
    setTitleState("Editar Horario");
    setModalInfoOpen(true);
    setIsEdit(true);
    setIdHorario(id);
  };

  const openModalDelete = (id: number) => {
    setModalDeleteOpen(true);
    setIdHorario(id);
  };

  const closeModalHorario = () => {
    setModalInfoOpen(false);
    setToggle(!toggle);
  };

  const closeModalDelete = () => {
    setModalDeleteOpen(false);
    setToggle(!toggle);
  };

  useEffect(() => {
    refetch();
  }, [toggle]);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      <Spin spinning={loading} className="h-100" indicator={circleIcon}>
        <div className="content p-20">
          <div className="py-2"></div>

          {horarios.map((horario: any, key) => {
            return (
              <div
                key={key}
                className="my-8 shadow-xl rounded-lg w-full h-28 px-8 flex flex-row justify-between items-center"
              >
                <div className="text-xl">Horario de Día:</div>
                <div className="text-base" style={{ color: "#878D96" }}>
                  {horario.days}
                </div>
                <div className="flex gap-x-3">
                  <button
                    className="btn-editar"
                    onClick={() => {
                      openModalEdit(horario.id);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="btn-eliminar"
                    onClick={() => {
                      openModalDelete(horario.id);
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            );
          })}

          <div className="py-4 w-full flex justify-center">
            <button className="btn-editar" onClick={openModalCreate}>
              Crear Horario
            </button>
          </div>

          <MyHorarioCalendar />

          <ModalHorario
            isEdit={isEdit}
            modalOpen={modalInfoOpen}
            setModalClose={closeModalHorario}
            title={titleState}
            id={idHorario}
          />

          <ModalDeleteHorario
            id={idHorario}
            modalDeleteOpen={modalDeleteOpen}
            setModalDeleteClose={closeModalDelete}
          />
        </div>
      </Spin>
    </>
  );
};
