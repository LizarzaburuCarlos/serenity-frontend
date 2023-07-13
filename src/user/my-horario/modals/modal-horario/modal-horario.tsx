import { Button, Modal, Select, TimePicker } from "antd";
import { Controller, useForm } from "react-hook-form";
import { ScheduleType } from "../../../../shared/types/schedule.type";
import { useSerenityContext } from "../../../../shared/contexts/SerenityProvider";
import { ScheduleResolver } from "./modal-horario.yup";
import { useEffect, useState } from "react";
import moment from "moment";
import { useQuery } from "react-query";
import {
  createSchedule,
  editSchedule,
  getScheduleByID,
} from "../../../../shared/services/schedule.service";

type ModalHorarioProps = {
  modalOpen: boolean;
  setModalClose: () => void;
  title: string;
  isEdit: boolean;
  id?: number;
};

const OPTIONS = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES"];

export const ModalHorario = ({
  modalOpen,
  setModalClose,
  title,
  isEdit,
  id,
}: ModalHorarioProps) => {
  const { user } = useSerenityContext();
  const [timeRange, setTimeRange] = useState<any>(null);

  const { getValues, control, handleSubmit, reset } = useForm<
    Omit<ScheduleType, "id">
  >({
    resolver: ScheduleResolver,
    mode: "all",
    defaultValues: {
      days: "[]",
      dateStart: new Date(),
      dateEnd: new Date(),
      detail: "-",
      userId: user.getUser()?.id,
    },
  });

  const filteredOptions = OPTIONS.filter(
    (o) => !JSON.parse(getValues().days).includes(o)
  );

  const { refetch: refetchCreate } = useQuery(
    "query-horario-create",
    async () => {
      return await createSchedule({
        days: getValues().days,
        dateStart: timeRange[0],
        dateEnd: timeRange[1],
        detail: getValues().detail,
        userId: getValues().userId,
      });
    },
    {
      enabled: false,
      onSuccess: () => {
        setModalClose();
      },
    }
  );

  const { refetch: refetchEdit } = useQuery(
    "query-horario-edit",
    async () => {
      return await editSchedule(
        {
          days: getValues().days,
          dateStart: timeRange[0],
          dateEnd: timeRange[1],
          detail: getValues().detail,
        },
        id ?? 0
      );
    },
    {
      enabled: false,
      onSuccess: () => {
        setModalClose();
      },
    }
  );

  const { refetch: refetchGetHorario } = useQuery(
    "query-get-horario",
    async () => {
      return await getScheduleByID(id ?? 0);
    },
    {
      enabled: false,
      onSuccess: (data) => {
        reset(data.data);
        setTimeRange([data.data.dateStart, data.data.dateEnd]);
      },
    }
  );

  const onGuardar = () => {
    if (isEdit) {
      handleSubmit(() => {
        refetchEdit();
      })();
    } else {
      handleSubmit(() => {
        refetchCreate();
      })();
    }
  };

  useEffect(() => {
    if (id) {
      refetchGetHorario();
    } else {
      reset({
        days: "[]",
        dateStart: new Date(),
        dateEnd: new Date(),
        detail: "-",
        userId: user.getUser()?.id,
      });
      setTimeRange(null);
    }
  }, [id]);

  return (
    <Modal
      title={title}
      centered
      open={modalOpen}
      onCancel={setModalClose}
      footer={
        <div className="py-3 flex justify-center items-center gap-x-2">
          <Button
            type="primary"
            style={{ backgroundColor: "#2d3648" }}
            onClick={onGuardar}
          >
            Guardar
          </Button>
          <Button
            type="primary"
            style={{ border: "1px solid #2d3648", color: "black" }}
            onClick={setModalClose}
          >
            Cancelar
          </Button>
        </div>
      }
    >
      <div className="text-base flex justify-center py-3">
        Días de la semana:
      </div>

      <Controller
        name="days"
        control={control}
        render={({ field }) => (
          <Select
            mode="multiple"
            placeholder="Seleccione los días de la semana"
            value={JSON.parse(field.value)}
            onChange={(data) => {
              field.onChange(JSON.stringify(data));
            }}
            style={{ width: "100%" }}
            options={filteredOptions.map((item) => ({
              value: item,
              label: item,
            }))}
          />
        )}
      />

      <div className="text-base flex justify-center py-3">Horario:</div>
      <TimePicker.RangePicker
        className="w-full"
        placeholder={["Inicio", "Fin"]}
        value={timeRange && [moment(timeRange[0]), moment(timeRange[1])]}
        onChange={(dates) => {
          if (dates && dates.length === 2) {
            const startDate = dates[0]?.toDate();
            const endDate = dates[1]?.toDate();
            setTimeRange([startDate, endDate]);
          } else {
            setTimeRange(null);
          }
        }}
      />
    </Modal>
  );
};
