import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../../../shared/yupLocale";
import { ScheduleType } from "../../../../shared/types/schedule.type";

const ScheduleSchema: yup.SchemaOf<Omit<ScheduleType, "id">> = yup
  .object()
  .shape({
    days: yup.string().required(),
    dateStart: yup.date().required(),
    dateEnd: yup.date().required(),
    detail: yup.string().required(),
    userId: yup.number().required(),
  });

export const ScheduleResolver = yupResolver(ScheduleSchema);
