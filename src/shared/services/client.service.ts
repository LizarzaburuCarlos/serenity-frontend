import { ClientType } from "../types/client.type";
import axiosClient from "../utils/api/clientAxios";

const API = axiosClient.getUri();

const url = `${API}/client`;

export const getAllClients = async () => {
  return await axiosClient.get(url);
};

export const getClientByID = async (id: number) => {
  return await axiosClient.get(`${url}/${id}`);
};

export const getClientByEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await axiosClient.get(`${url}/${email}/${password}`);
};

export const createClient = async (user: Omit<ClientType, "id">) => {
  return await axiosClient.post(url, user);
};

export const editClient = async (user: Omit<ClientType, "id">, id: number) => {
  return await axiosClient.put(`${url}/${id}`, user);
};

export const deleteClient = async (id: number) => {
  return await axiosClient.delete(`${url}/${id}`);
};
