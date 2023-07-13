import React, { useState, useEffect, useContext } from "react";
import { Button } from "antd";
import { ModalSolicitudes } from "../modal-solicitudes/modal-solicitudes";
import { getReserveByUser, editStateReserve } from "../../../shared/services/reserve.service";
import { SerenityContext } from "../../../shared/contexts/SerenityProvider";

export const PanelSolicitudes = ({ stateFilter }) => {
  const [modalSolicitudesOpen, setModalSolicitudesOpen] = useState(false);
  const [reserves, setReserves] = useState([]);
  const [selectedReserve, setSelectedReserve] = useState(null);

  const context = useContext(SerenityContext);

  if (context === null) {
    throw new Error("useSerenityContext must be used within a SerenityProvider");
  }

  const { user } = context;
  const userId = user.getUser().id;

  useEffect(() => {
    const fetchReserves = async () => {
      try {
        const response = await getReserveByUser(userId);
        const filteredReserves = response.data.filter(reserve => reserve.state === stateFilter);
        setReserves(filteredReserves);
        console.log(filteredReserves);
      } catch (error) {
        console.error("Error fetching reserves:", error);
      }
    };

    fetchReserves();
  }, [userId, stateFilter]);

  const openModalSolicitudes = (reserve) => {
    setSelectedReserve(reserve);
    setModalSolicitudesOpen(true);
  };

  const closeModalSolicitudes = () => {
    setSelectedReserve(null);
    setModalSolicitudesOpen(false);
  };

  const acceptReserve = (id) => {
    const newState = { state: "ACCEPTED" };

    editStateReserve(newState, id)
      .then((response) => {
        alert("Estado actualizado");
        console.log("Estado actualizado:", response);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error al actualizar el estado:", error);
      });
  };

  const rejectReserve = (id) => {
    const newState = { state: "REFUSED" };

    editStateReserve(newState, id)
      .then((response) => {
        alert("Estado actualizado");
        console.log("Estado actualizado:", response);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error al actualizar el estado:", error);
      });
  };

  return (
    <div className="w-full">
      <div className="w-full py-4">
        {reserves.map((reserve, index) => (
          <div key={index} className="w-full flex justify-between items-center border p-6 my-2">
            <div className="w-10 h-10 bg-slate-500"></div>
            <div className="text-base">{reserve.description + " de: " + reserve.client.name + " "+ reserve.client.lastName }</div>
            <div className="flex gap-x-4">
              <Button
                type="primary"
                style={{ backgroundColor: "#000" }}
                onClick={() => openModalSolicitudes(reserve)}
              >
                Ver
              </Button>
              {reserve.state === "PENDING" && (
                <Button
                  type="primary"
                  style={{ backgroundColor: "#2d3648" }}
                  onClick={() => acceptReserve(reserve.id)}
                >
                  Aceptar
                </Button>
              )}
              {reserve.state !== "ACCEPTED"&& reserve.state !== "REFUSED" && (
                <Button type="primary" style={{ border: "1px solid #2d3648", color: "black" }}
                onClick={() => rejectReserve(reserve.id)}
                >
                  Rechazar
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      <ModalSolicitudes
        modalSolicitudesOpen={modalSolicitudesOpen}
        setModalSolicitudesClose={closeModalSolicitudes}
        reserve={selectedReserve}
      />
    </div>
  );
};
