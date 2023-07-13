import { ReserveType } from "../types/reserve.type";
import axiosClient from "../utils/api/clientAxios";

const API = axiosClient.getUri();

const url = `${API}/reserve`;

export const getAllReserves = async () => {
  return await axiosClient.get(url);
};

export const getReserveByID = async (id: number) => {
  return await axiosClient.get(`${url}/${id}`);
};

export const createReserve = async (reserve: Omit<ReserveType, "id">) => {
  return await axiosClient.post(url, reserve);
};

export const editReserve = async (
  state: Omit<ReserveType, "id">,
  id: number
) => {
  return await axiosClient.put(`${url}/${id}`, state);
};


export const getReserveByClient = async (
  id: number
) => {
  return await axiosClient.get(`${url}/client/${id}`);
};
export const getReserveByUser = async (
  id: number
) => {
  return await axiosClient.get(`${url}/user/${id}`);
};
export const editStateReserve = async (
  reserve: { state: string },
  id: number
) => {
  return await axiosClient.put(`${url}/state/${id}`, reserve);
};

export const deleteReserve = async (id: number) => {
  return await axiosClient.delete(`${url}/${id}`);
};
