import React, { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Tabs } from "antd";
import { PanelSolicitudes } from "./panel-solicitudes/panel-solicitudes";

const circleIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const SolicitudesComponent = () => {
  const [loading, setLoading] = useState(true);
  const [currentFilterState, setCurrentFilterState] = useState("1");

  const onChange = (key) => {
    setCurrentFilterState(key);
  };

  const items = [
    {
      key: "1",
      label: "Pendientes",
      state: "PENDING",
      children: <PanelSolicitudes stateFilter="PENDING" />,
    },
    {
      key: "2",
      label: "Aceptadas",
      state: "ACCEPTED",
      children: <PanelSolicitudes stateFilter="ACCEPTED" />,
    },
    {
      key: "3",
      label: "Rechazadas",
      state: "REFUSED",
      children: <PanelSolicitudes stateFilter="REFUSED" />,
    },
  ];

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Spin spinning={loading} className="h-100" indicator={circleIcon}>
        <div className="content p-20">
          <div className="py-2"></div>
          <Tabs defaultActiveKey={currentFilterState} items={items} onChange={onChange} />
        </div>
      </Spin>
    </>
  );
};
