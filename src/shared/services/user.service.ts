import { UserType } from "../types/user.type";
import axiosClient from "../utils/api/clientAxios";

const API = axiosClient.getUri();

const url = `${API}/user`;

export const getAllUsers = async () => {
  return await axiosClient.get(url);
};

export const getUserByID = async (id: number) => {
  return await axiosClient.get(`${url}/${id}`);
};

export const getUserByEmailAndPassword = async (
  email: string,
  password: string
) => {
  return await axiosClient.get(`${url}/${email}/${password}`);
};

export const createUser = async (user: Omit<UserType, "id">) => {
  return await axiosClient.post(url, user);
};

export const editUser = async (user: Omit<UserType, "id">, id: number) => {
  return await axiosClient.put(`${url}/${id}`, user);
};

export const deleteUser = async (id: number) => {
  return await axiosClient.delete(`${url}/${id}`);
};
