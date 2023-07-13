import { ScheduleType } from "../types/schedule.type";
import axiosClient from "../utils/api/clientAxios";

const API = axiosClient.getUri();

const url = `${API}/schedule`;

export const getAllSchedules = async () => {
  return await axiosClient.get(url);
};

export const getScheduleByID = async (id: number) => {
  return await axiosClient.get(`${url}/${id}`);
};

export const getScheduleByUserID = async (userId: number) => {
  return await axiosClient.get(`${url}/user/${userId}`);
};

export const createSchedule = async (schedule: Omit<ScheduleType, "id">) => {
  return await axiosClient.post(url, schedule);
};

export const editSchedule = async (
  schedule: Omit<ScheduleType, "id" | "userId">,
  id: number
) => {
  return await axiosClient.put(`${url}/${id}`, schedule);
};

export const deleteSchedule = async (id: number) => {
  return await axiosClient.delete(`${url}/${id}`);
};
