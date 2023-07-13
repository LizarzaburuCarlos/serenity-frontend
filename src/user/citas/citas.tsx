import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useQuery } from "react-query";
import { getReserveByUser } from "../../shared/services/reserve.service";
import { useSerenityContext } from "../../shared/contexts/SerenityProvider";

const circleIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const CitasComponent = () => {
  const { user } = useSerenityContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [reservas, setReservas] = useState([]);

  const { refetch } = useQuery(
    "query-get-reserves-all-citas",
    async () => {
      return await getReserveByUser(user.getUser()?.id ?? 0);
    },
    {
      enabled: false,
      onSuccess: (data) => {
        setReservas(data.data.filter((reserva) => reserva.state == "ACCEPTED"));
      },
    }
  );

  useEffect(() => {
    setLoading(false);
  });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <Spin spinning={loading} className="h-100" indicator={circleIcon}>
        <div className="content p-20">
          <div className="py-10">
            <input
              className="w-full h-14 rounded-lg border-2 border-solid border-black p-4"
              type="text"
              placeholder="Buscar"
            />
          </div>

          {reservas.map((cita: any, index) => {
            return (
              <div key={index} className="w-full h-16 my-5 flex flex-row">
                <div className="w-20 flex justify-center items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-50"></div>
                </div>
                <div className="px-4 flex flex-col justify-center ">
                  <div className=""><b>Estado: </b>{cita.state}</div>
                  <div className=""><b>Paciente: </b>{cita.client.name + ' '+ cita.client.lastName}</div>
                  <div className="mb-2"><b>Fecha: </b>{cita.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Spin>
    </>
  );
};
